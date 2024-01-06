import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';
 
const UserList = () => {
 
    const [users, setUsers] = useState([]);
 
    const getUsers = async () => {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        setUsers(users);
    }
    console.log(users);
 
    useEffect(() => {
        getUsers();
    }, [])
 
    return (
        <>
            <header className='appHeader'>
                <h1>User Dirctory</h1>
            </header>
            <section className='userListContainer'>
                {users.map(user =>
                    <User key={user.id} user_name={user.name} user_id={user.id}/>
                )}
            </section>
 
        </>
    )
}
 
export default UserList;