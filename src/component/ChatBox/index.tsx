import { useState, useEffect, useCallback } from 'react'
import { Box, Paper } from '@mui/material'
import AppBar from './AppBar'
import RecordBox from './RecordBox'
import MessageSend from './MessageSend'
import { MsgType, ConversationType } from './RecordBox/type'
import useSocketContext from 'hooks/useSocketContext'

function SendandRecieveBox() {
  const socket = useSocketContext()
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

  const handleMsgSend = useCallback(
    (msgData: Omit<ConversationType, 'type'>) => {
      setmsgList((prev) => {
        return [...prev, { type: 2, ...msgData }]
      })
      socket?.emit('client_send_msg', msgData)
    },
    [socket]
  )

  return (
    <>
      <RecordBox msgList={msgList} />
      <MessageSend handleMsgSend={handleMsgSend} />
    </>
  )
}
export default function index() {
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
        <SendandRecieveBox />
      </Paper>
    </Box>
  )
}
