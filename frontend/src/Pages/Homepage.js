import React,{useEffect} from 'react'
import { Container ,Box,Text,Tabs,TabList,TabPanels,TabPanel,Tab} from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
   <Container  maxW='md' centerContent>
     <Box  d='flex' justifyContent='center'  
         p={5}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        <Text fontSize="4xl" fontFamily="Work sans" textAlign='center'>Chat</Text>
     </Box>
     <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
     <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
     </Box>
   </Container>
  )
}

export default Homepage