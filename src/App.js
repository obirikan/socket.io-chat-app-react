import './App.css';
import Chat from './Chat'
import io from 'socket.io-client'
import { useState } from 'react';
import { Center, Button, Container, Stack, Input, Box, Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


const socket=io.connect('http://localhost:3001')


function App() {
  const [name,setname]=useState('')
  const [room,setroom]=useState('')
  const [show,setshow]=useState(true)


  const joinRoom=async ()=>{
     if(room !== "" && name !== ""){
      setshow(!show)
      
     await socket.emit("join_room",room)
     }
  }


  return (
    <div className='conatiner'>
      
        {show?(
    <>
       <Center  h='400px'  color='black'>
       <Container mt={200}>
         <Box
          d='flex'
          justifyContent='center'
          alignItems='center'
         ><Heading  >Rooms</Heading></Box>
         <Stack spacing={4} marginTop='2'>
                <Input placeholder='name' size='md' width='auto' onChange={(e)=>setname(e.target.value)} />
                <Input placeholder='room' size='md' width='auto' onChange={(e)=>setroom(e.target.value)}/>
                <Button rightIcon={<ArrowForwardIcon />} width='auto' onClick={joinRoom} colorScheme='blue'   size='sm'>
                  Join room
               </Button>
          </Stack>
       </Container>
       </Center>
    </>
       ):<Chat name={name} socket={socket} room={room}/>}
    </div>
  );
}

export default App;
