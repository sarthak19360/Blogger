export const BlogPost = () => {
  return (
    <div className="h-screen w-8/12 mx-auto flex flex-col mt-7">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publish
        </button>
        <Avatar name="Sarthak" />
      </div>
      <div className="flex flex-col w-full mx-auto">
        <input
          className="text-5xl px-5 pt-5 pb-2 mb-1 focus:outline-none"
          placeholder="Title"
        />
        <textarea
          className="text-xl px-6 pt-1 min-h-96 focus:outline-none"
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

interface avatarPropsType {
  name: string;
}

const Avatar = ({ name }: avatarPropsType) => {
  return (
    <div className="w-8 h-8 rounded-full bg-red-100 flex justify-center items-center mr-2">
      {name[0]}
    </div>
  );
};
