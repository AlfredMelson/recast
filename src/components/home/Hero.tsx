import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Stack } from '@mui/material'
import GradientText from '../typography/GradientText'
import { HeroContainer } from '../../layout'
import TaskCard from '../showcase/TaskCard'
import PlayerCard from '../showcase/PlayerCard'
import ThemeToggleButton from '../showcase/ThemeToggleButton'
import ThemeSwitch from '../showcase/ThemeSwitch'
import ThemeChip from '../showcase/ThemeChip'
import NotificationCard from '../showcase/NotificationCard'
import ThemeAccordion from '../showcase/ThemeAccordion'
import ThemeTimeline from '../showcase/ThemeTimeline'
import FolderTable from '../showcase/FolderTable'
import ThemeSlider from '../showcase/ThemeSlider'
import ThemeDatePicker from '../showcase/ThemeDatePicker'
import ThemeTabs from '../showcase/ThemeTabs'
import ViewToggleButton from '../showcase/ViewToggleButton'
import ThemeButton from '../showcase/ThemeButton'
import GetStartedButton from './GetStartedButton'

// function createLoading(sx: BoxProps['sx']) {
//   return () => (
//     <Box
//       sx={{
//         borderRadius: 1,
//         bgcolor: theme => (theme.palette.mode === 'dark' ? 'primaryDark.800' : 'grey.100'),
//         ...sx,
//       }}
//     />
//   )
// }

// const TaskCard = dynamic(() => import('../showcase/TaskCard'), {
//   ssr: false,
//   loading: createLoading({ width: 360, height: 280 }),
// })
// const PlayerCard = dynamic(() => import('../showcase/PlayerCard'), {
//   ssr: false,
//   loading: createLoading({ width: 360, height: 146 }),
// })
// const ThemeToggleButton = dynamic(() => import('../showcase/ThemeToggleButton'), {
//   ssr: false,
//   loading: createLoading({ width: 360, height: 48 }),
// })
// const ThemeSwitch = dynamic(() => import('../showcase/ThemeSwitch'), {
//   ssr: false,
//   loading: createLoading({ width: 108, height: 20 }),
// })
// const ThemeChip = dynamic(() => import('../showcase/ThemeChip'), {
//   ssr: false,
//   loading: createLoading({ width: 212, height: 32 }),
// })
// const ThemeTimeline = dynamic(() => import('../showcase/ThemeTimeline'), {
//   ssr: false,
//   loading: createLoading({ width: 360, height: 180 }),
// })
// const FolderTable = dynamic(() => import('../showcase/FolderTable'), {
//   ssr: false,
//   loading: createLoading({ width: 360, height: 212 }),
// })

// const ThemeDatePicker = dynamic(() => import('../showcase/ThemeDatePicker'), {
//   ssr: false,
//   loading: createLoading({ width: { md: 360, xl: 400 }, height: 260 }),
// })
// const ThemeTabs = dynamic(() => import('../showcase/ThemeTabs'), {
//   ssr: false,
//   loading: createLoading({ width: { md: 360, xl: 400 }, height: 48 }),
// })
// const ThemeSlider = dynamic(() => import('../showcase/ThemeSlider'), {
//   ssr: false,
//   loading: createLoading({ width: { md: 124, xl: 164 }, height: 214 }),
// })
// const ViewToggleButton = dynamic(() => import('../showcase/ViewToggleButton'), {
//   ssr: false,
//   loading: createLoading({ width: 196, height: 40 }),
// })
// const ThemeButton = dynamic(() => import('../showcase/ThemeButton'), {
//   ssr: false,
//   loading: createLoading({ width: 196, height: 154 }),
// })
// const ThemeAccordion = dynamic(() => import('../showcase/ThemeAccordion'), {
//   ssr: false,
//   loading: createLoading({ width: { md: 360, xl: 400 }, height: 171 }),
// })
// const NotificationCard = dynamic(() => import('../showcase/NotificationCard'), {
//   ssr: false,
//   loading: createLoading({ width: { md: 360, xl: 400 }, height: 146 }),
// })

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
    <HeroContainer
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant='h1' sx={{ my: 2, maxWidth: 470 }}>
            Type, recast, &amp; visualize <GradientText>JSON</GradientText>
          </Typography>
          {/* &nbsp;UI */}
          <Typography color='text.secondary' sx={{ mb: 3, maxWidth: 436 }}>
            JavaScript Object Notation, a lightweight data-interchange format that is easy for
            humans to understand, for machines to parse and is programming language independent.
          </Typography>
          <GetStartedButton
            size='large'
            variant='outlined'
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          />
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
        '&& *': {
          fontFamily: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(
            ','
          ),
        },
      }}
      rightRef={frame}
      right={
        <React.Fragment>
          <div>
            {isMdUp && (
              <Stack spacing={4} sx={{ '& > .MuiPaper-root': { maxWidth: 'none' } }}>
                <TaskCard />
                <PlayerCard />
                <ThemeToggleButton />
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <ThemeSwitch />
                  <Box sx={{ width: 40 }} />
                  <ThemeChip />
                </Box>
                <ThemeTimeline />
                <FolderTable />
              </Stack>
            )}
            {isMdUp && (
              <Stack spacing={4} sx={{ ml: 4, '& > .MuiPaper-root': { maxWidth: 'none' } }}>
                <ThemeDatePicker />
                <ThemeTabs />
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <ThemeSlider />
                  </Box>
                  <Stack spacing={2} sx={{ ml: 4 }}>
                    <ViewToggleButton />
                    <ThemeButton />
                  </Stack>
                </Box>
                <ThemeAccordion />
                <NotificationCard />
              </Stack>
            )}
          </div>
        </React.Fragment>
      }
    />
  )
}
