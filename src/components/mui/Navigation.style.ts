import { styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @name Navigation
 * @description styles header navigation items
 * @purpose provide navigation links
 * @param {nav} navigation section element
 * @param {grey, styled} mui grey & styled
 * @param {theme} MuiBrandingTheme
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return styled navigation links
 */

export const Navigation = styled('nav')(({ theme }) => ({
  '& ul': {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  '& li': {
    ...theme.typography.body2,
    '& > a, & > div': {
      textDecoration: 'none',
      fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
      color:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[100] : BrandSwatch.Light.Grey[800],
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
      '&:hover': {
        color:
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
        '@media (hover: none)': {
          backgroundColor: 'initial',
        },
      },
    },
    '& > div': {
      cursor: 'default',
    },
  },
}))