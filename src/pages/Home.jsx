import { useEffect, useState, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/request";
import Loader from "@/components/Loader";
import Avatar from "../assets/avatar.jpg";

const Home = () => {
  const [data, setData] = useState([]); // 直接初始化为空数组
  const [loading, setLoading] = useState(false); // 控制加载状态
  const [slogan, setSlogan] = useState(null); // slogan 状态改为 null 以便更好的检查

  const isFetching = useRef(false); // 避免重复请求

  // 使用 useCallback 包裹 fetchData
  const fetchData = useCallback(async () => {
    if (isFetching.current) return; // 防止重复请求
    setLoading(true); // 设置加载状态
    isFetching.current = true;

    try {
      // 并行请求 posts 和 slogan 数据
      const [postsRes, sloganRes] = await Promise.all([
        api.get("/posts"),
        api.get("/content/slogan"),
      ]);

      // 处理 posts 数据
      const { data: postData } = postsRes.data;
      setData(postData);

      // 处理 slogan 数据
      const activeSlogan = sloganRes.data.data.slogan.find((item) => item.show);
      setSlogan(activeSlogan); // 设置 slogan
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // 加载完成
      isFetching.current = false; // 重置 isFetching
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // 依赖 fetchData

  return (
    <div className="max-w-screen-md m-auto">
      <div className="flex flex-col gap-8 items-center justify-center mb-8">
        <NavLink
          to="/about"
          className="rounded-full border-2 border-transparent transition-all duration-300 hover:border-pink-500 hover:shadow-lg"
        >
          <img
            src={Avatar}
            className="inline-block size-32 rounded-full transition-all duration-300 hover:scale-90"
            alt=""
          />
        </NavLink>
        {/* 如果 slogan 存在，显示 slogan */}
        {slogan && <div className="mb-20">{slogan.title}</div>}
      </div>

      {/* 如果数据为空且正在加载，则显示 loading */}
      {loading && !data.length ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.slug} className="gap-8 border-b">
              <div className="py-8 space-y-5">
                <div className="flex items-center">
                  <div className="text-zinc-400 text-sm w-24">
                    {new Date(post.published).toLocaleDateString()}
                  </div>
                  <h3 className="text-2xl font-normal">
                    <NavLink
                      to={`/detail/${post.slug}`}
                      className="text-zinc-800 hover:text-pink-500 transition-colors duration-300"
                    >
                      {post.title}
                    </NavLink>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
