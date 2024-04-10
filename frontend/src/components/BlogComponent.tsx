const BlogComponent = ({ blog }: any) => {
  return (
    <div className="w-8/12 flex flex-col justify-center">
      <div className="text-3xl font-bold mb-3">{blog?.title}</div>
      <div className="text-gray-400 mb-1">
        Posted on {new Date(Date.now()).toDateString()}
      </div>
      <div>{blog?.content}</div>
    </div>
  );
};

export default BlogComponent;
