import { useLoaderData } from "react-router-dom";

const Github = () => {
  const user = useLoaderData();
  return (
    <div className="text-center m-5 bg-gray-500 text-white p-3 text-xl">
      <div>Github followers: {Number(user.followers).toLocaleString()}</div>
      <div className="text-center">
        <img src={user.avatar_url} alt="git picutre" className="text-center" loading="lazy" />
      </div>
    </div>
  );
};

export default Github;
