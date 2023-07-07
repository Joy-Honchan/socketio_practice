import { useState } from 'react'
import { Box, Grid } from '@mui/material'
import TextRec from './TextRec'
import { MsgType } from './type'

export default function RecordBox() {
  const [incomeMsg, setIncomeMsg] = useState<MsgType[]>([
    {
      userName: 'Ben',
      time: '15:00',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, necessitatibus debitis maiores fugiat non architecto natus ipsum quo libero expedita perferendis similique, aspernatur autem reiciendis officia magnam consequuntur, ex ipsam!    Et, labore recusandae eligendi id assumenda earum maxime enim quae distinctio! Provident ipsam aut ad saepe neque, mollitia placeat perspiciatis earum quasi dolore, error minus quo doloribus dolor assumenda cupiditate'
    }
  ])
  const [outsendMsg, setOutsendMsg] = useState<MsgType[]>([
    {
      userName: 'John',
      time: '14:00',
      message: '12354484486454545'
    }
  ])
  return (
    <Grid container sx={{ height: '500px', overflowY: 'auto' }}>
      <Grid item xs={6} sx={{ px: 2, py: 1 }}>
        {incomeMsg.map((msg, index) => (
          <TextRec key={index} msgData={msg} bgColor="#74BF64" />
        ))}
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'end' }}
      >
        {outsendMsg.map((msg, index) => (
          <TextRec key={index} msgData={msg} bgColor="#B97BC7" />
        ))}
      </Grid>
    </Grid>
  )
}
