import { TextField, Box, IconButton } from '@mui/material'
import { Send } from '@mui/icons-material'

export default function MessageSend() {
  return (
    <Box sx={{ display: 'flex', px: 2, py: 2, gap: 1 }}>
      <TextField sx={{ flex: '1 0 200px' }} />
      <IconButton sx={{ flex: '0 0 60px' }}>
        <Send fontSize="large" />
      </IconButton>
    </Box>
  )
}
