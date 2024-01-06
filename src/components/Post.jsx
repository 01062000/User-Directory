import React from 'react'
 
const Post = ({id, postTitle, postContent}) => {
    return (
        <>  
            <div className="postCard">
                <h2>{postTitle}</h2>
                <p>{postContent}</p>
            </div>
        </>
    )
}
 
export default Post;