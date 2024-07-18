import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SocialMediaLink = ({ url, icon, label }) => {
  return (
    <Link to={url} className="text-gray-500 hover:text-gray-900">
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default SocialMediaLink;
