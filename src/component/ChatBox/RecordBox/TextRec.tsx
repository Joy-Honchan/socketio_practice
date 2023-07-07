import { Box, Paper, Typography } from '@mui/material'
import { MsgType } from './type'

export default function TextRec({
  msgData,
  bgColor
}: {
  msgData: MsgType
  bgColor: string
}) {
  return (
    <Box>
      <Typography variant="h6">{msgData.userName}</Typography>
      <Paper sx={{ bgcolor: bgColor, display: 'inline-block', padding: 1 }}>
        <Typography color={'white'}>{msgData.message}</Typography>
      </Paper>
      <Typography variant="body1">{msgData.time}</Typography>
    </Box>
  )
}
