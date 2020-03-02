import React from 'react';
import Posts from "./containers/Blog/Posts";
import NewPost from "./containers/Blog/NewPost";
import Header from "./components/Header";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Header />
      <Router className="w-full">
        <Posts path="/" />
        <NewPost path="/new-post" />
      </Router>
    </div>
  );
}

export default App;
