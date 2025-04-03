/* eslint-disable react/prop-types */
const PostContent = ({ post }) => {
  return (
    <div>
      <div className="text-zinc-400 text-sm mb-6 flex items-center">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 mr-3"></span>
        {new Date(post.published).toLocaleString()}
      </div>
      <h1 className="text-2xl font-normal mb-10 text-zinc-800 sm:text-4xl">
        {post.title}
      </h1>
      <div
        className="text-zinc-600 text-base space-y-6"
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></div>
    </div>
  );
};

export default PostContent;
