import { Fragment, useState } from "react";
import Votes from "./Votes";

function VidStats({video: {title, views, createdAt, upvotes, downvotes}}) {
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    return (
        <Fragment>
            <h1>{title}</h1>
            <p>{views} Views | {createdAt} </p>

            <Votes likes={likes} dislikes={dislikes} setLikes={setLikes} setDislikes={setDislikes}/>
        </Fragment>
    )
}

export default VidStats;