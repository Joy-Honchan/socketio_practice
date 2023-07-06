import { ChangeEvent, useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { keyframes } from '@emotion/react'

const shrinkUp = keyframes`
    to {
        height: 150px
    }
`
export default function NameInput({
  changeName
}: {
  changeName: (value: string) => void
}) {
  const [nameInput, setNameInput] = useState('')
  const [shouldShrink, setShouldShrink] = useState(false)
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const handleClick = () => {
    if (!nameInput) return
    changeName(nameInput)
    setShouldShrink(true)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // bgcolor: 'pink',
        height: '100%',
        ...(shouldShrink && { animation: `${shrinkUp} 0.5s forwards` })
      }}
    >
      <TextField
        onChange={handleOnchange}
        label="Please Enter Your Name"
        variant="outlined"
      />
      <Box>
        <Button variant="contained" onClick={handleClick} sx={{ ml: 1 }}>
          Start a Chat
        </Button>
      </Box>
    </Box>
  )
}
