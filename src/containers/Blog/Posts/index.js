import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post'

export default class Posts extends Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get('/posts')
        .then(res => {
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
        .catch(err => {
          //  console.log(err)
          //  this.setState({error: true})
        })
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
                <Post
                title={post.title}
                author={post.author}
                clicked={() => this.handlePostClick(post.id)}
                key={post.id}
                />
            );
            });
        }

        return (
          <div className="w-full bg-gray-700 flex flex-col items-center p-5">
            {posts}
          </div>
        );
    }
}
