import React from 'react';
import Posts from "./containers/Blog/Posts";
import NewPost from "./containers/Blog/NewPost";
import FullPost from './containers/Blog/FullPost'
import Header from "./components/Header";
import { Router } from "@reach/router";
import NotFound from './components/404';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Router className="w-full">
        <Posts path="/" />
        <NewPost path="/new-post" />
        <FullPost path="/post/:id" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
