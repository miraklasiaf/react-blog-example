import React from 'react'

export default function Post(props) {
    return (
      <article
        className="flex flex-col w-1/3 justify-center px-3 py-2 border m-2 hover:bg-blue-100"
        onClick={props.clicked}
      >
        <h1 className="text-gray-700">{props.title}</h1>
        <div className="">
          <div className="text-gray-700 py-4">{props.author}</div>
        </div>
      </article>
    );
}
