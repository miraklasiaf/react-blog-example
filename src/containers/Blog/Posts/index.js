import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post'
import { Link } from '@reach/router'

export default class Posts extends Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get('/posts')
        .then(res => {
          console.log(res)
          const posts = res.data.slice(0, 4)
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: 'Faisal'
            }
          })
          this.setState({
            posts: updatedPosts
          })
        })
        .catch(err => {})
        ;
    }

    handlePostClick = (id) => {
      this.setState({
        selectedPostId: id
      })
    }

    render() {
        let posts = (
            <p className="text-center">Something went wrong!</p>
        );
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
            return (
              <Link to={'/post/' + post.id} key={post.id} className="w-1/2 p-5">
                <Post
                  title={post.title}
                  author={post.author}
                  clicked={() => this.handlePostClick(post.id)}
                />
              </Link>
            );
            });
        }

        return (
          <div className="flex flex-col bg-gray-600 items-center">
            {posts}
          </div>
        );
    }
}
