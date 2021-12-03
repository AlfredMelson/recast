import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container, Stack } from '@mui/material'
import { TreeViewContainer } from './TreeViewContainer'
import { Navigation } from './Navigation'
import { RichTreeView } from './RichTreeView'

export default function Hero() {
  const frame = React.useRef<null | HTMLDivElement>(null)
  const globalTheme = useTheme()
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'))
  React.useEffect(() => {
    let obs: undefined | MutationObserver
    function suppressTabIndex() {
      if (frame.current && isMdUp) {
        const elements = frame.current.querySelectorAll(
          'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
        elements.forEach(elm => {
          elm.setAttribute('tabindex', '-1')
        })
      }
    }
    if (typeof MutationObserver !== 'undefined' && frame.current) {
      obs = new MutationObserver(suppressTabIndex)
      obs.observe(frame.current, { childList: true, subtree: true })
    }
    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [isMdUp])
  return (
    <Container maxWidth='xl'>
      <Navigation />
      <TreeViewContainer
        left={
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <RichTreeView />
          </Box>
        }
        rightSx={{
          p: 3,
          minWidth: 2000,
          '& > div': {
            width: 360,
            display: 'inline-flex',
            verticalAlign: 'top',
            '&:nth-of-type(2)': {
              width: { xl: 400 },
            },
          },
        }}
        rightRef={frame}
        right={
          <React.Fragment>
            <div>
              {isMdUp && (
                <Stack spacing={4} sx={{ '& > .MuiPaper-root': { maxWidth: 'none' } }}>
                  {/* <Typography>isMDUp</Typography> */}
                </Stack>
              )}
              {/* {isMdUp && (
              <Stack spacing={4} sx={{ ml: 4, '& > .MuiPaper-root': { maxWidth: 'none' } }}>
                <Typography>isMDUp</Typography>
              </Stack>
            )} */}
            </div>
          </React.Fragment>
        }
      />
    </Container>
  )
}