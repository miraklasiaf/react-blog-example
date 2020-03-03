import React from 'react';
import Posts from "./containers/Blog/Posts";
// import NewPost from "./containers/Blog/NewPost";
import asyncComponent from './hoc/asyncComponent'
import FullPost from './containers/Blog/FullPost'
import Header from "./components/Header";
import { Router } from "@reach/router";
import NotFound from './components/404';

// Lazyload
// import {Suspense}
// const FullPost = React.lazy(() => import('./containers/Blog/FullPost'));
// <Suspense fallback=(<div>Loading...</div>)><FullPost /></Suspense>

const AsyncNewPost = asyncComponent(() => {
  return import('./containers/Blog/NewPost');
})

// Use auth state for guarding router

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Router className="w-full">
        <Posts path="/" />
        <AsyncNewPost path="/new-post" />
        <FullPost path="/post/:id" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
