import { useState, useCallback, useEffect } from 'react'
import NameInput from 'component/NameInput'
import ChatBox from 'component/ChatBox'
import { Box, Button, Typography } from '@mui/material'
import SocketContext, { socket } from 'context/socketContext'

function App() {
  const [name, setName] = useState('')
  const changeName = useCallback((value: string) => {
    setName(value)
  }, [])
  return (
    <SocketContext.Provider value={socket}>
      <Box sx={{ height: '100vh', minHeight: 300 }}>
        <NameInput changeName={changeName} />
        {name && <ChatBox userName={name} />}
      </Box>
    </SocketContext.Provider>
  )
}

export default App
