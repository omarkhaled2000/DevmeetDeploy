import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./conversation.css"







const Conversation = ({ conversation, currentUser }) => {
    var counter = 0;
    const [user, setUser] = useState(null)
    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser._id);
        const getUser = async () => {
            await axios("https://devmeet-23-d82k.onrender.com/user/" + friendId).then(res => {
                setUser(res.data)
                counter++;
            }).catch(
                err => {
                    console.log("err")

                })
        }
        getUser();
    }, [currentUser, conversation])
    return (
        //need to add profile picture
        <div className='conversation'>
            { 
                user && <img className='conversationImg' src={`https://devmeet-23-d82k.onrender.com/images/${user?.profilePicture}`} alt="" />
            }
            {
                user && <span className="conversationName">{user?.firstName+" "+user?.lastName}</span>
            }
        </div>
    );
};

export default Conversation;