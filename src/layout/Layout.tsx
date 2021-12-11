import { Box } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { AppHeader } from './AppHeader'

export function Layout() {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: '100vh',
          overflowY: 'hidden',
          bgcolor: theme => (theme.palette.mode === 'dark' ? '#1F2428' : '#FFFFFF'),
        }}>
        <AppHeader />
        <Outlet />
        <EditorDrawer />
      </Box>
    </React.Fragment>
  )
}
