import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-center p-3 ">
      <div className="text-lg font-bold p-2">User: {userId}</div>
    </div>
  );
};

export default User;
