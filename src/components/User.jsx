import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
const User = ({user_name, user_id}) => {
    const nav = useNavigate();
 
    const [noOfPost, setNumberOfPost] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
 
    const getNumberOfPost = async () => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        const posts = await postsResponse.json();
        setNumberOfPost(posts.length);
        setIsLoading(false)
    }
 
    function navigate(){
        nav(`/user/${user_id}`)
    }
 
    useEffect(() => {
        setIsLoading(true);
        getNumberOfPost();
    }, [])
 
    return (
        <>
            <section className='userCard' onClick={navigate}>
                <h2>{user_name}</h2>
                <p>Posts : { isLoading ? 'Loading...' : noOfPost}</p>
            </section>
 
        </>
    )
}
 
export default User;