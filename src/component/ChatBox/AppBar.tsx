import React from 'react'
import { AppBar as MuiAppBar, Toolbar } from '@mui/material'
import { Person } from '@mui/icons-material'

export default function AppBar() {
  return (
    <MuiAppBar
      position="relative"
      sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
    >
      <Toolbar>
        <Person />
        SomeOne
      </Toolbar>
    </MuiAppBar>
  )
}
