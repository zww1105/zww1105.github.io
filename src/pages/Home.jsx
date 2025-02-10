import { useEffect, useState, useRef } from "react";
import api from "../api/request";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1); // 追踪当前页数
  const [loading, setLoading] = useState(false); // 控制加载状态
  const [hasMore, setHasMore] = useState(true);
  const isFetching = useRef(false); // 用于避免重复请求
  const postsLimit = 10;

  useEffect(() => {
    const fetchData = async () => {
      if (isFetching.current) return;
      setLoading(true); // 开始加载
      isFetching.current = true;
      try {
        const res = await api.get(
          `/posts?limit=${postsLimit}&offset=${(page - 1) * postsLimit}`
        );
        const { data, meta } = res.data;
        setData((prevData) => (prevData ? [...prevData, ...data] : data));
        setHasMore(meta.count > page * postsLimit);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // 加载完成
        isFetching.current = false;
      }
    };

    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(page + 1); // 增加页码，触发新的请求
    }
  };

  return (
    <div className="max-w-screen-md border-l pl-6">
      {data ? (
        <div className="space-y-4">
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
                  <Button variant="link" className="pl-0 mt-8">
                    Detail
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            ))}
          {/* 只在没有加载时才显示加载按钮 */}
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
          {/* 在加载时，显示 loading icon 而不显示按钮 */}
          {loading && (
            <div className="flex justify-center items-center mt-8">
              <Loader className="animate-spin w-8 h-8 text-zinc-600 dark:text-zinc-400" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <Loader className="animate-spin w-12 h-12 text-zinc-600 dark:text-zinc-400" />
        </div>
      )}
    </div>
  );
};

export default Home;
