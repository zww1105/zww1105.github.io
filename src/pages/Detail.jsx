import { useEffect, useState } from "react";
import api from "../api/request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader } from "lucide-react";

const Detail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const { id } = useParams(); // 获取动态参数

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="max-w-screen-md m-auto relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute -top-16 left-0 sm:-top-2 sm:-left-32 rounded-full text-zinc-500"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
      </Button>

      {post.title ? (
        <div>
          <div className="text-zinc-400 text-sm mb-6 flex items-center">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500 mr-3"></span>
            {new Date(post.updated).toLocaleString()}
          </div>
          <h1 className="text-4xl font-medium mb-8 text-zinc-800 dark:text-zinc-100">
            {post.title}
          </h1>
          <div
            className="text-zinc-600 dark:text-zinc-400 text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <Loader className="animate-spin w-12 h-12 text-zinc-600 dark:text-zinc-400" />
        </div>
      )}
    </div>
  );
};

export default Detail;
