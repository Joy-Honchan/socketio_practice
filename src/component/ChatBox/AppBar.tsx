import React from 'react'
import { AppBar as MuiAppBar, Toolbar } from '@mui/material'
import { Chat } from '@mui/icons-material'

export default function AppBar() {
  return (
    <MuiAppBar
      position="relative"
      sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
    >
      <Toolbar>
        <Chat sx={{ paddingRight: 1 }} />
        Live Chat
      </Toolbar>
    </MuiAppBar>
  )
}
