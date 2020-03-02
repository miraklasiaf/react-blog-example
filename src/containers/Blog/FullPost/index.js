import React, { Component } from 'react'
//  import axios from "axios";
import axios from '../../axios'

export default class FullPost extends Component {
    state = {
      loadedPost: null
    }

    componentDidUpdate() {
      if(this.props.id){
        if (
          !this.state.loadedPost ||
          (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
        ) {
          axios
            .get('/posts/' + this.props.id)
            .then(res => {
              this.setState({
                loadedPost: res.data
              });
              //  console.log(res)
            });
        }
      }
    }

    handleDeletePost = () => {
      axios.delete('/posts/' + this.props.id)
        .then(res => {
          console.log(res)
        })
    }
  
    render() {
        let post = <p className="text-center">Please select a Post!</p>
        if(this.props.id){
          post = <p className="text-center">Loading...</p>
        }
        if(this.state.loadedPost){
          post = (
            <div className="max-w-4xl mx-4 flex flex-col items-center mb-2">
              <h1 className="text-xl font-bold text-gray-700">{this.state.loadedPost.title}</h1>
              <p className="text-gray-700">{this.state.loadedPost.body}</p>
              <button className="bg-red-600 rounded-lg px-3 py-2 mt-4 text-gray-100 hover:bg-red-400" onClick={this.handleDeletePost}>
                Delete
              </button>
            </div>
          );
        }
        return post;
    }
}
