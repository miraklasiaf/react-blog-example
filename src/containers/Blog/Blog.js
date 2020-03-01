import React, { Component } from 'react'
//  import axios from 'axios'
import axios from '../../axios'
import FullPost from '../../components/FullPost/FullPost'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'

export default class Blog extends Component {
    state = {
      posts: [],
      selectedPostId: null,
      error: false
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
          //  console.log(res);
        })
        .catch(err => {
          //  console.log(err)
          this.setState({error: true})
        })
        ;
    }

    handlePostClick = (id) => {
      this.setState({
        selectedPostId: id
      })
    }

    render() {
        let posts = <p className="text-center">Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
            return (
              <Post
                title={post.title}
                author={post.author}
                clicked={() => this.handlePostClick(post.id)}
                key={post.id}
              />
            )
          })
        }

        return (
          <div className="flex flex-col items-center">
            <section className="w-full px-4 flex flex-wrap border-b justify-center">
              {posts}
            </section>
            <section className="w-full flex flex-col items-center border-b">
              <FullPost id={this.state.selectedPostId}/>
            </section>
            <section className="w-full flex items-center justify-start">
              <NewPost />
            </section>
          </div>
        );
    }
}
