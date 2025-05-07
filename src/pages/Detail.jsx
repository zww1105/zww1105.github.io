import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import api from "../api/request";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import PostContent from "@/components/PostContent";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!id) {
      setError("文章ID不能为空");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.get(`/posts/${id}`);
      setPost(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("加载文章失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (error) {
    return (
      <div className="max-w-screen-md m-auto text-center py-8">
        <div className="text-red-500 mb-4">{error}</div>
        <button
          onClick={handleBack}
          className="text-pink-500 hover:text-pink-600 transition-colors"
        >
          返回
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md m-auto relative">
      <div
        className="absolute -top-16 left-0 sm:-top-2 sm:-left-32 cursor-pointer"
        onClick={handleBack}
      >
        <BackButton />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : post ? (
        <PostContent post={post} />
      ) : (
        <div className="text-center py-8 text-gray-500">未找到文章内容</div>
      )}
    </div>
  );
};

Detail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    published: PropTypes.string,
  }),
};

export default Detail;
