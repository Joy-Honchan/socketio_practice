import { useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import TextRec from './TextRec'
import { MsgType } from './type'

export default function RecordBox() {
  const [msgList, setmsgList] = useState<MsgType[]>([
    {
      type: 0,
      message: 'John joined the chat.'
    },
    {
      type: 1,
      userName: 'Ben',
      time: '15:00',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, necessitatibus debitis maiores fugiat non architecto natus ipsum quo libero expedita perferendis similique, aspernatur autem reiciendis officia magnam consequuntur, ex ipsam!    Et, labore recusandae eligendi id assumenda earum maxime enim quae distinctio! Provident ipsam aut ad saepe neque, mollitia placeat perspiciatis earum quasi dolore, error minus quo doloribus dolor assumenda cupiditate'
    },
    {
      type: 2,
      userName: 'John',
      time: '15:01',
      message: 'Hi Ben, how are you?'
    }
  ])
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
