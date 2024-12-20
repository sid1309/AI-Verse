import { Link } from 'react-router-dom'
import './chatList.css'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react';

const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`,{
        credentials: "include",
      }).then((res) => res.json()),
  });

  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [data]);

  return(
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to="/dashboard" style={{fontSize:"14px"}}>Create a new Chat</Link>
      <Link to="/" style={{fontSize:"14px"}}>Explore AI Verse</Link>
      <Link to="/" style={{fontSize:"14px"}}>Contact</Link>
      <hr/>
      <span className='title'>RECENT CHATS</span>
      <div className='list' ref={listRef} >
        {isPending ? "Loading...." : error? "Something went wrong": data?.map(chat=>(
          <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
            {chat.title}
            </Link>
        ))}

      </div>
      <hr/>
      <div className='upgrade'>
        <img src="/logo.png" alt='' />
        <div className='texts'>
          <span>AI Verse</span>
          <span>Innovate Interact Inspire</span>
        </div>
      </div>

    </div>
  )
}
export default ChatList
