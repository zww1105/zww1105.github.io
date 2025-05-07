import { useEffect, useState, useRef, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api/request";
import Loader from "@/components/Loader";
import Avatar from "../assets/avatar.jpg";

// 将 PostItem 组件抽离出来，使用 memo 优化渲染性能
const PostItem = memo(({ post }) => (
  <li className="gap-8 border-b">
    <div className="py-8 space-y-5">
      <div className="flex items-center">
        <div className="text-zinc-400 text-sm w-24">
          {new Date(post.published).toLocaleDateString()}
        </div>
        <h3 className="text-2xl">
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
));

PostItem.displayName = "PostItem";
PostItem.propTypes = {
  post: PropTypes.shape({
    published: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// 将 Avatar 组件抽离出来
const AvatarComponent = memo(({ isHovered, setIsHovered, avatarRef }) => (
  <NavLink
    to="/about"
    className="group relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    <div className="relative">
      <img
        ref={avatarRef}
        src={Avatar}
        className={`
          inline-block size-32 rounded-full
          transition-all duration-500 ease-in-out
          transform
          ${isHovered ? "scale-95 rotate-3" : "scale-100 rotate-0"}
          hover:shadow-lg
          border-2 border-transparent
          group-hover:border-pink-500
        `}
        alt="用户头像"
      />
      <div
        className={`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-pink-400/10 to-purple-400/10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          mix-blend-overlay
        `}
      />
    </div>
  </NavLink>
));

AvatarComponent.displayName = "AvatarComponent";
AvatarComponent.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  setIsHovered: PropTypes.func.isRequired,
  avatarRef: PropTypes.object.isRequired,
};

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slogan, setSlogan] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(null);
  const avatarRef = useRef(null);
  const isFetching = useRef(false);

  const fetchData = useCallback(async () => {
    if (isFetching.current) return;

    setLoading(true);
    setError(null);
    isFetching.current = true;

    try {
      const [postsRes, sloganRes] = await Promise.all([
        api.get("/posts"),
        api.get("/content/slogan"),
      ]);

      const { data: postData } = postsRes.data;
      setData(postData);

      const activeSlogan = sloganRes.data.data.slogan.find((item) => item.show);
      setSlogan(activeSlogan);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("加载数据失败，请稍后重试");
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return (
      <div className="max-w-screen-md m-auto text-center text-red-500 py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-screen-md m-auto">
      <div className="flex flex-col gap-8 items-center justify-center mb-8">
        <AvatarComponent
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          avatarRef={avatarRef}
        />
        {slogan && <div className="mb-20">{slogan.title}</div>}
      </div>

      {loading && !data.length ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : (
        <ul>
          {data.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Home);
