import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
);

export default function Header() {
    return (
      <div className="flex bg-red-300 border-b border-gray-200 w-full h-16 items-center justify-center">
        <div className="flex text-gray-800">
          <NavLink to="/" className="block flex items-center mr-5 hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/new-post" className="block flex items-center hover:text-gray-400">
            New Post
          </NavLink>
        </div>
      </div>
    );
}
