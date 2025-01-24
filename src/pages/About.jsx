import { useEffect, useState } from "react";
import api from "../api/request";
import { Loader } from "lucide-react";

const About = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/about`);
        setPost(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-md m-auto relative">
      {post.title ? (
        <div>
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

export default About;
