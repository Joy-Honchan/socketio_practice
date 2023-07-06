import { useEffect, useState, useCallback, ChangeEvent } from 'react'
import NameInput from 'component/NameInput'
import ChatBox from 'component/ChatBox'
import { Box } from '@mui/material'

function App() {
  const [name, setName] = useState('')
  const changeName = useCallback((value: string) => {
    setName(value)
  }, [])
  return (
    <Box sx={{ height: '100vh', minHeight: 300 }}>
      <NameInput changeName={changeName} />
      <ChatBox userName={name} />
    </Box>
  )
}

export default App
