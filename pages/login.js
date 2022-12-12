import React from 'react'
import Login from "../components/Login"
import { ChakraProvider } from '@chakra-ui/react'


const login = () => {
    return (
      <ChakraProvider>
      <div>
        <Login/>
      </div>
      </ChakraProvider>
    )
  }
  
export default login