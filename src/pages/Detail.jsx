import { useEffect, useState } from "react";
import api from "../api/request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import PostContent from "@/components/PostContent";

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
      <div
        className="absolute -top-16 left-0 sm:-top-2 sm:-left-32"
        onClick={() => navigate(-1)}
      >
        <BackButton></BackButton>
      </div>

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

export default Detail;
