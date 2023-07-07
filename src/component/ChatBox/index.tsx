import { Typography, Box, Paper } from '@mui/material'
import AppBar from './AppBar'
import RecordBox from './RecordBox'
import MessageSend from './MessageSend'

interface PropsType {
  userName: string
}

export default function index({ userName }: PropsType) {
  return (
    <Box
      sx={{
        height: '100vh',
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper sx={{ margin: 5, width: 600 }}>
        <AppBar />
        <RecordBox />
        <MessageSend />
      </Paper>
    </Box>
  )
}
