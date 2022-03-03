import React, { useState,useEffect } from 'react'
// import { Box } from '@chakra-ui/react'
import { Center, Button,SimpleGrid,Text, Container, Stack,Spacer, Input, Box, Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import './App.css'
import { ChatState } from './context/ChatProvider'

import ScrollableFeed from 'react-scrollable-feed'



const Chat = ({socket,name,room}) => {
    const [msg,setMsg]=useState('')
    const [messageList, setMessageList] = useState([]);
    const {usernames,setusernames}=ChatState()
    
  const send=async ()=>{
      if(msg !==''){
        const message={
            msg:msg,
            room:room,
            name:name
        }
       await socket.emit("send_msg",message)
       setMessageList((list)=>[...list,message])
      }
  }
 
  useEffect(() => {
     socket.on('recieve_msg',(data)=>{
        setMessageList((list)=>[...list,data])
     })  
  }, [socket])
  console.log(usernames)
  return (
      <>
    
    <div>
    <Heading className='head'><center>{name===usernames?'':`${usernames?`${usernames} texted`:''}`}</center><center>Room:{room}</center></Heading>
        <Center>
        <div className='cont'>
        {messageList.map(a=>(
            <>{setusernames(a.name)}
                <Box bg={a.name === name?'tomato':'purple'} w={'40%'} className={a.name === name?'l':'k'} m={5} p={2} borderRadius='md'  color='white'>
                  {a.msg} 
                </Box>
            </>
              ))}
    
        <nav>
        <Input placeholder='send message' variant='filled'  size='md' onChange={(e)=>setMsg(e.target.value)}/>
        <Button onClick={send} rightIcon={<ArrowForwardIcon />}></Button>
        </nav>
        </div>
        </Center>
        
    </div>
  
    </>
  )
}

export default Chat