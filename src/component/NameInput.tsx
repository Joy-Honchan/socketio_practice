import { ChangeEvent, useState, useContext, useRef, useMemo } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { keyframes } from '@emotion/react'
import SocketContext from 'context/SocketContext'
import TypingEffect from 'component/TypingEffect'

export default function NameInput({
  changeName
}: {
  changeName: (value: string) => void
}) {
  const socket = useContext(SocketContext)
  const [nameInput, setNameInput] = useState('')
  const [shouldShrink, setShouldShrink] = useState(false)

  const itemRef = useRef<HTMLDivElement>(null)

  const shrinkUp = keyframes`
  to {
    height: 0;
    transform: translateY(-${
      (itemRef.current?.getClientRects()[0]?.height || 0) + 10
    }px);
    display: none
  }
`

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
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        ...(shouldShrink && { animation: `${shrinkUp} 1s forwards` })
      }}
    >
      <Box ref={itemRef}>
        <TypingEffect />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            // bgcolor: 'pink',
            // height: '100%',
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
      </Box>
    </Box>
  )
}
