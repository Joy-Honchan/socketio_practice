import { useEffect, useState } from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material'
import TextRec from './TextRec'
import { MsgType } from './type'

export default function RecordBox({ msgList }: { msgList: MsgType[] }) {
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
