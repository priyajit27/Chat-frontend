import React, {useState } from 'react'
import {Box} from '@chakra-ui/react'
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/Chatprovider";

const ChatPage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();
  
  return (
    <div style={{ width: "100%"}}>
    {user && <SideDrawer />}
    {/* <div style={{display:"flex",width:'100%',height:'91.5vh',padding:'10px',justifyContent:'space-between'}}> */}
    <Box display="flex"  justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user && <MyChats fetchAgain={fetchAgain} />}
      {user && (
        <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      )}
    </Box>
  </div>
  // </div>
  )
}

export default ChatPage