import React from 'react'

export default function Post(props) {
    return (
      <div
        className="flex flex-col items-center px-3 py-2 border hover:bg-gray-500"
        onClick={props.clicked}
      >
        <h1 className="text-white text-center">{props.title}</h1>
        <h1 className="text-white py-2">{props.author}</h1>
      </div>
    );
}
