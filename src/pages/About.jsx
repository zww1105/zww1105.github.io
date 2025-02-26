import { useEffect, useState } from "react";
import api from "../api/request";
import Loader from "@/components/Loader";
import PostContent from "@/components/PostContent";

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
        <PostContent post={post} />
      ) : (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default About;
