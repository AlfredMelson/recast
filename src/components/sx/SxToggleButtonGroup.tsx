import ToggleButtonGroup, { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material'

/**
 * @name SxPrimaryToggleButtonGroup
 * @description styles main ToggleButtonGroup
 * @param {ToggleButtonGroup, ToggleButtonGroupProps} mui ButtonGroup
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled ButtonGroup
 */
export const SxPrimaryToggleButtonGroup = styled((props: ToggleButtonGroupProps) => (
  <ToggleButtonGroup {...props} />
))(({ theme }) => ({
  '& .MuiToggleButtonGroup-root': {
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  },
}))
