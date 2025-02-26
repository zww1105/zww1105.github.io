import { useEffect, useState, useRef, useCallback } from "react";
import api from "../api/request";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";
import AwesomeButton from "@/components/AwesomeButton";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // 直接初始化为空数组
  const [page, setPage] = useState(1); // 当前页数
  const [loading, setLoading] = useState(false); // 控制加载状态
  const [hasMore, setHasMore] = useState(true); // 控制是否有更多数据
  const [slogan, setSlogan] = useState(null); // slogan 状态改为 null 以便更好的检查

  const isFetching = useRef(false); // 避免重复请求
  const postsLimit = 10;

  // 使用 useCallback 包裹 fetchData
  const fetchData = useCallback(async () => {
    if (isFetching.current || !hasMore) return; // 防止重复请求
    setLoading(true); // 设置加载状态
    isFetching.current = true;

    try {
      // 并行请求 posts 和 slogan 数据
      const [postsRes, sloganRes] = await Promise.all([
        api.get(`/posts?limit=${postsLimit}&offset=${(page - 1) * postsLimit}`),
        api.get("/content/slogan"),
      ]);

      // 处理 posts 数据
      const { data: postData, meta } = postsRes.data;
      setData((prevData) => [...prevData, ...postData]); // 合并数据
      setHasMore(meta.count > page * postsLimit); // 是否有更多数据

      // 处理 slogan 数据
      const activeSlogan = sloganRes.data.data.slogan.find((item) => item.show);
      setSlogan(activeSlogan); // 设置 slogan
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // 加载完成
      isFetching.current = false; // 重置 isFetching
    }
  }, [page, hasMore]);

  // 当 page 或 hasMore 改变时执行 fetchData
  useEffect(() => {
    fetchData();
  }, [fetchData, page]); // 依赖 fetchData 和 page

  // 处理加载更多
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // 增加页码
    }
  };

  return (
    <div className="max-w-screen-md">
      {/* 如果 slogan 存在，显示 slogan */}
      {slogan && <div className="mb-20">{slogan.title}</div>}

      {/* 如果数据为空且正在加载，则显示 loading */}
      {loading && !data.length ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : (
        <div className="space-y-4 border-l border-zinc-100 dark:border-zinc-700/40 pl-6">
          {/* 筛选掉 slug 为 "about" 的数据 */}
          {data
            .filter((i) => i.slug !== "about")
            .map((post) => (
              <div key={post.slug} className="gap-8">
                <div className="text-zinc-400 text-sm pl-8 mb-4">
                  {new Date(post.updated).toLocaleDateString()}
                </div>
                <div
                  className="hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-2xl transition p-8"
                  onClick={() => navigate(`/detail/${post.slug}`)}
                >
                  <h3 className="text-zinc-800 dark:text-zinc-100 text-base font-medium">
                    {post.title}
                  </h3>
                  <div className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                    {post.summary}
                  </div>
                  <div className="flex justify-end mt-8">
                    <AwesomeButton>Detail</AwesomeButton>
                  </div>
                </div>
              </div>
            ))}

          {/* 只在没有加载时才显示加载更多按钮 */}
          {hasMore && !loading && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Load More
              </button>
            </div>
          )}

          {/* 在加载时显示 loading icon */}
          {loading && (
            <div className="flex justify-center items-center mt-8">
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
