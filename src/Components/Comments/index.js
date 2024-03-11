import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {
    nameInput: '',
    commentsList: [],
    count: 0,
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        deleteComment={this.deleteComment}
        counter={eachComment.count}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      count: prevState.count + 1,
    }))
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, count} = this.state

    return (
      <div className="cont">
        <h1 className="head">Day Goals!</h1>

        <form className="form" onSubmit={this.onAddComment}>
          <input
            type="text"
            className="goal-input"
            placeholder={`Write code ${nameInput}${count}`}
            value={nameInput}
            onChange={this.onChangeNameInput}
          />

          <button type="submit" className="add-button">
            Add Comment
          </button>
        </form>

        <ul className="Goals-list">{this.renderCommentsList()}</ul>
      </div>
    )
  }
}

export default Comments
