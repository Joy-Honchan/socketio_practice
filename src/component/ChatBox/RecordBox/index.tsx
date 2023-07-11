import { useEffect, useState, useContext } from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material'
import TextRec from './TextRec'
import { MsgType } from './type'
import SocketContext from 'context/socketContext'

export default function RecordBox() {
  const socket = useContext(SocketContext)
  const [msgList, setmsgList] = useState<MsgType[]>([
    {
      type: 0,
      message: 'hello'
    },
    {
      type: 1,
      userName: 'hello',
      time: 'hello',
      message: 'Lorem'
    }
    // {
    //   type: 2,
    //   userName: 'hello',
    //   time: 'hello',
    //   message:
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci quaerat reiciendis architecto, illo dolorum laudantium provident omnis laborum distinctio accusamus debitis id, nihil error excepturi enim officiis dicta quas.'
    // }
  ])

  useEffect(() => {
    function onGetNewMsg(msg: MsgType) {
      setmsgList((prev) => {
        return [...prev, msg]
      })
    }
    socket?.on('server_send_msg', onGetNewMsg)

    return () => {
      socket?.off('server_send_msg', onGetNewMsg)
    }
  }, [socket])
  return (
    <Box sx={{ height: '500px', overflowY: 'auto' }}>
      {msgList.map((msg, index) => {
        if (msg.type === 0) {
          return (
            <Box
              key={index}
              sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'center' }}
            >
              <Paper
                sx={{
                  bgcolor: '#ffe2bd',
                  display: 'inline-block',
                  padding: 1.5,
                  borderRadius: 5
                }}
              >
                <Typography>{msg.message}</Typography>
              </Paper>
            </Box>
          )
        }
        if (msg.type === 1) {
          return (
            <Grid key={index} container sx={{ px: 2, py: 1 }}>
              <Grid item xs={6}>
                <TextRec key={index} msgData={msg} bgColor="#74BF64" />
              </Grid>
            </Grid>
          )
        } else {
          return (
            <Grid
              key={index}
              container
              sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'end' }}
            >
              <Grid item xs={6}>
                <TextRec key={index} msgData={msg} bgColor="#B97BC7" />
              </Grid>
            </Grid>
          )
        }
      })}
    </Box>
  )
}
