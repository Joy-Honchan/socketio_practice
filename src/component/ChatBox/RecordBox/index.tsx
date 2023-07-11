import { useEffect, useState, useContext } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import TextRec from './TextRec'
import { MsgType } from './type'
import SocketContext from 'context/socketContext'

export default function RecordBox() {
  const socket = useContext(SocketContext)
  const [msgList, setmsgList] = useState<MsgType[]>([])

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
    <Grid container sx={{ height: '500px', overflowY: 'auto' }}>
      {msgList.map((msg, index) => {
        if (msg.type === 0) {
          return (
            <Grid
              key={index}
              item
              xs={12}
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
            </Grid>
          )
        }
        if (msg.type === 1) {
          return (
            <Grid key={index} item xs={6} sx={{ px: 2, py: 1 }}>
              <TextRec key={index} msgData={msg} bgColor="#74BF64" />
            </Grid>
          )
        } else {
          return (
            <Grid
              key={index}
              item
              xs={6}
              sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'end' }}
            >
              <TextRec key={index} msgData={msg} bgColor="#B97BC7" />
            </Grid>
          )
        }
      })}
    </Grid>
  )
}
