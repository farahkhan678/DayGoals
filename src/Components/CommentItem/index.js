import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, counter} = commentDetails

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="Goals-list">
      <div className="Goal-name">
        <p className="para">{name}</p>
        <p>{counter}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 .196.262c.04.11.062.229.062.348v8a1 1 0 0 1-1 1h-7a1 1 0 0 1 0-2h6V10.414l-6-6V20a1 1 0 0 1-1 1z" />
        </svg>

        <button className="button" type="button" onClick={onDeleteComment}>
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
