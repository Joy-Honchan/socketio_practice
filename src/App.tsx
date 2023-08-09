import { useState, useCallback } from 'react'
import NameInput from 'component/NameInput'
import ChatBox from 'component/ChatBox'
// import ChatAnimation from 'component/ChatAnimation'
import { Box } from '@mui/material'
import SocketContext, { socket } from 'context/SocketContext'
import UserNameContext from 'context/UserNameContext'

function App() {
  const [name, setName] = useState('')
  const changeName = useCallback((value: string) => {
    setName(value)
  }, [])
  return (
    <SocketContext.Provider value={socket}>
      <UserNameContext.Provider value={name}>
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
          <NameInput changeName={changeName} />
          <ChatBox />
        </Box>
      </UserNameContext.Provider>
    </SocketContext.Provider>
  )
}

export default App
