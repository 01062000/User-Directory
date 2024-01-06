import React, {Suspense} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
 
import { useParams, NavLink } from 'react-router-dom';
import Clock from './Clock';
import Post from './Post';
 
const UserProfile = () => {
    const {id} = useParams();
 
    const [isLoading, setIsLoading] = useState(false);
 
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
 
    const getPostDetails = async () => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await postsResponse.json();
        setPosts(posts);
        setIsLoading(false)
    }
 
    const getUserDetails = async () => {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await userResponse.json();
        console.log(user);
        setUser(user);
        setIsLoading(false)
    }
    console.log(user)
    useEffect(() => {
        setIsLoading(true)
        getUserDetails();
        getPostDetails();
    }, [])
 
    return (
        <>
            <header className='profileHeader'>
                <NavLink to={'/'}><button>Back</button></NavLink>
                <h2>Profile Page</h2>
                <Clock />
            </header>
           
            { !isLoading ? <><section className='profileInfo'>
                <div className='row'>
                    <h2 style={{'font-weight' : 'lighter'}}>Name : {user.name}</h2>
                    <span>Username : {user.username}</span> | <span>Cathphrase : {user.company?.catchPhrase}</span>
                </div>
                <div className='row'>
                    <h2 style={{'font-weight' : 'lighter'}}>City : {user.address?.city}</h2>
                    <span>Email : {user.email}</span> | <span>Phone : {user.phone}</span>
                </div>
            </section></> : <h2 style={{'text-align' : 'center'}}>Loading Profile Data...</h2>}
           
            <h1>Posts</h1>
 
            { !isLoading ? <section className='postContainer'>
                {posts.map(post => <Post key={post.id} id={post.id} postTitle={post.title} postContent={post.body}/>)}
            </section> : <h2 style={{'text-align' : 'center'}}>Loading Post Data...</h2>}
        </>
    )
}
 
export default UserProfile;