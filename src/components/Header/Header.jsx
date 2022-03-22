import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let links = [
    { link: "/videos", title: "Home page", id: 1 },
    { link: "/add", title: "Add", id: 2 },
  ];
  return (
    <div>
      {links.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          style={{
            margin: "10px",
            textDecoration: "none",
            fontSize: "28px",
          }}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
