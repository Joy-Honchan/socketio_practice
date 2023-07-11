import { useState, ChangeEvent } from 'react'
import { TextField, Box, IconButton } from '@mui/material'
import { Send } from '@mui/icons-material'
import useNameContext from 'hooks/useNameContext'
import { ConversationType } from './RecordBox/type'

export default function MessageSend({
  handleMsgSend
}: {
  handleMsgSend: (msgData: Omit<ConversationType, 'type'>) => void
}) {
  const [msg, setMsg] = useState('')
  const userName = useNameContext()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value)
  }
  const handleClick = () => {
    const sendData = {
      userName: userName,
      message: msg,
      time: `${new Date().getHours()}:${new Date()
        .getMinutes()
        .toLocaleString('en-US', { minimumIntegerDigits: 2 })}:${new Date()
        .getSeconds()
        .toLocaleString('en-US', { minimumIntegerDigits: 2 })}`
    }
    handleMsgSend(sendData)
  }
  return (
    <Box sx={{ display: 'flex', px: 2, py: 2, gap: 1 }}>
      <TextField onChange={handleChange} sx={{ flex: '1 0 200px' }} />
      <IconButton onClick={handleClick} sx={{ flex: '0 0 60px' }}>
        <Send fontSize="large" />
      </IconButton>
    </Box>
  )
}
