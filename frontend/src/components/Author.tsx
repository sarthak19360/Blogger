const Author = ({ authorName }: { authorName: string | null }) => {
  return (
    <div className="w-4/12 ml-20 flex flex-col justify-center">
      <div className="font-semibold">{authorName}</div>
      <div className="text-xl font-bold">Human</div>
      <div className="text-gray-500">
        A passionate storyteller weaving captivating narratives for the sheer
        joy of sharing experiences. With an insatiable curiosity and creative
        flair, {authorName} crafts engaging posts exploring personal anecdotes,
        niche interests, and trending topics.
      </div>
    </div>
  );
};

export default Author;
