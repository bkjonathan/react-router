import { Link } from "react-router-dom";

const Section = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{title}</h2>
    <ul className="text-gray-500 font-medium">
      {links.map((link) => (
        <li key={link.name} className="mb-4">
          {link.isExternal ? (
            <a href={link.url} className="hover:underline" target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ) : (
            <Link to={link.url} className="hover:underline">
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Section;
