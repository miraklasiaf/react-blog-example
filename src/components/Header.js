import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
    return (
      <div className="flex bg-red-300 border-b border-gray-200 w-full h-16 items-center justify-center">
        <div className="flex text-gray-800">
          <Link to="/" className="block flex items-center mr-5 hover:text-gray-400">
            Home
          </Link>
          <Link to="/new-post" className="block flex items-center hover:text-gray-400">
            New Post
          </Link>
        </div>
      </div>
    );
}
