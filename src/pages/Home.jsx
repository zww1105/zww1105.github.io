import { useEffect, useState } from "react";
import api from "../api/request";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // const postsLimit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/posts");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-md border-l pl-24">
      {data ? (
        <div className="space-y-4">
          {data
            .filter((i) => i.slug !== "about")
            .map((post) => (
              <div
                className="p-8 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 cursor-pointer rounded-2xl transition"
                key={post.slug}
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
            ))}
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
