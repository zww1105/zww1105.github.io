/* eslint-disable react/prop-types */
const PostContent = ({ post }) => {
  return (
    <div>
      <div className="text-zinc-400 text-sm mb-6 flex items-center">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500 mr-3"></span>
        {new Date(post.updated).toLocaleString()}
      </div>
      <h1 className="text-5xl font-medium mb-10 text-zinc-800 dark:text-zinc-100">
        {post.title}
      </h1>
      <div
        className="text-zinc-600 dark:text-zinc-400 text-base space-y-6"
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></div>
    </div>
  );
};

export default PostContent;
