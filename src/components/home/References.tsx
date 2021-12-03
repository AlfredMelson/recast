import { useInView } from 'react-intersection-observer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CompaniesGrid, { CORE_CUSTOMERS, ADVANCED_CUSTOMERS } from './CompaniesGrid'

export { CORE_CUSTOMERS, ADVANCED_CUSTOMERS }

const References = ({
  companies,
}: {
  companies: typeof CORE_CUSTOMERS | typeof ADVANCED_CUSTOMERS
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  return (
    <Container ref={ref} sx={{ py: { xs: 4, sm: 6, md: 10 } }}>
      <Box sx={{ minHeight: { xs: 236, sm: 144, md: 52 } }}>
        {inView && <CompaniesGrid data={companies} />}
      </Box>
      <Typography
        color={theme => (theme.palette.mode === 'dark' ? 'grey.500' : 'grey.800')}
        textAlign='center'
        variant='body2'
        sx={{
          minHeight: 42, // a hack to reduce CLS (layout shift)
          mt: 4,
          mx: 'auto',
          maxWidth: 400,
        }}
      >
        From startups to Fortune 500s, the world&apos;s best product teams use MUI to build their
        UIs.
      </Typography>
    </Container>
  )
}

export default References