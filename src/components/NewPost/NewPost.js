import React, { Component } from 'react'
//  import axios from 'axios'
import axios from '../../axios'

export default class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Faisal'
    }

    handlePostData = () => {
      const data = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      }
      axios.post('/posts', data)
        .then(res => {
          console.log(res)
        })
    }

    render() {
        return (
          <div className="flex flex-col w-1/2 mx-auto">
            <h1 className="text-gray-600 text-lg mt-2">Add a Post</h1>
            <div className="mt-4 flex flex-col">
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                className="bg-gray-700 border border-gray-600 rounded-lg py-1 text-gray-100"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label>Content</label>
              <textarea
                rows="4"
                value={this.state.content}
                onChange={event =>
                  this.setState({ content: event.target.value })
                }
                className="bg-gray-700 border border-gray-600 rounded-lg py-1 text-gray-100"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label>Author</label>
              <select
                value={this.state.author}
                onChange={event =>
                  this.setState({ author: event.target.value })
                }
                className="bg-gray-700 border border-gray-600 rounded-lg py-1 text-gray-100"
              >
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
              </select>
            </div>
            <div className="mt-4 w-full flex justify-center">
              <button
                className="bg-blue-600 text-blue-100 px-3 py-1 rounded-lg w-1/3"
                onClick={this.handlePostData}
              >
                Add Post
              </button>
            </div>
          </div>
        );
    }
}
