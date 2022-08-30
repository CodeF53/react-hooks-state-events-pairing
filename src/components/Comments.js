import { useState } from "react"
import Comment from "./Comment"

function Comments({ video: {comments}}) {
    const [isCommentsShown,setIsCommentsShown] = useState(false)
    const commentSectionStyle = isCommentsShown? {} : {display:"none"}
    return (
        <div>
            <button onClick={ ()=>{setIsCommentsShown(isCommentsShown=>!isCommentsShown)} }>
                {isCommentsShown? "Hide":"Show"} Comments
            </button>
            <hr/>
            <div style={commentSectionStyle}>
                <h2>{comments.length} Comments</h2>
                {comments.map(comment => <Comment comment={comment}/>) }
            </div>
        </div>
    )
}

export default Comments