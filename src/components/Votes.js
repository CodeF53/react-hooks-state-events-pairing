function Votes({likes, dislikes, setLikes, setDislikes}) {
    return (
        <div>
            {/* I know you can like/dislike more than once, but it doesn't say anything about it */}
            <button onClick={()=>{setLikes(likes+1)}}>{likes} 👍</button>
            <button onClick={()=>{setDislikes(dislikes+1)}}>{dislikes} 👎</button>
        </div>
    )
}

export default Votes