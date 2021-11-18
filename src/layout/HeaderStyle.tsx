import { styled, alpha } from '@mui/material/styles'

export const HeaderStyle = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.appBar,
  backdropFilter: 'blur(15px)',
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
  }`,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.primaryDark[800], 0.72)
      : 'rgba(255,255,255,0.72)',
}))
