import { ChangeEvent, useState, useContext } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { keyframes } from '@emotion/react'
import SocketContext from 'context/SocketContext'

const shrinkUp = keyframes`
    to {
        height: 0;
        transform: translateY(-30px);
    }
`
export default function NameInput({
  changeName
}: {
  changeName: (value: string) => void
}) {
  const socket = useContext(SocketContext)
  const [nameInput, setNameInput] = useState('')
  const [shouldShrink, setShouldShrink] = useState(false)

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const handleClick = () => {
    if (!nameInput) return
    changeName(nameInput)
    setShouldShrink(true)
    socket?.emit('client_add_name', nameInput)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // bgcolor: 'pink',
        height: '100%',
        ...(shouldShrink && { animation: `${shrinkUp} .5s forwards` })
      }}
    >
      <TextField
        onChange={handleOnchange}
        label="Please Enter Your Name"
        variant="outlined"
        disabled={shouldShrink}
      />
      <Box>
        <Button
          disabled={shouldShrink}
          variant="contained"
          onClick={handleClick}
          sx={{ ml: 1 }}
        >
          Start a Chat
        </Button>
      </Box>
    </Box>
  )
}
