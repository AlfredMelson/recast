import { Theme } from '@mui/material/styles'
import { BrandSwatch } from './BrandSwatch'

export function BrandThemedComponents(theme: Theme) {
  return {
    components: {
      // https://mui.com/api/button/
      MuiButton: {
        defaultProps: {},
      },
      styleOverrides: {
        root: {}, // Styles applied to the root element
        text: { fontWeight: theme.palette.mode === 'dark' ? 400 : 600 }, // Styles applied to the root element if variant="text"
        outlined: {
          fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? BrandSwatch.Dark.Blue[800]
              : BrandSwatch.Light.Blue[400],
        }, // Styles applied to the root element if variant="outlined"
        contained: {
          textTransform: 'none',
        }, // Styles applied to the root element if variant="contained"
        disabled: {
          textTransform: 'none',
        }, // State class applied to the root element if disabled={true}
        sizeMedium: {
          textTransform: 'none',
        }, // State class applied to the root element if disabled={true}
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: 'outlined',
          disableFocusRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiContainer: {
        defaultProps: {},
        styleOverrides: {
          root: {
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(0, 20),
            },
          },
        },
      },
      MuiDivider: {
        defaultProps: {},
        styleOverrides: {
          root: {
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[900]
                : BrandSwatch.Light.Grey[100],
            margin: theme.spacing(5, 10),
          },
        },
      },
      MuiFormControl: {
        defaultProps: {},
        styleOverrides: {},
      },
      MuiFormControlLabel: {
        defaultProps: {},
        styleOverrides: {
          label: {},
          root: {},
        },
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {},
      },
      MuiIconButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, & .Mui-focused': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInput: {
        defaultProps: {},
        styleOverrides: {
          root: {},
          input: {
            '&:focus': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInputBase: {
        defaultProps: {},
        styleOverrides: {},
      },
      MuiInputLabel: {
        defaultProps: {},
        styleOverrides: {
          root: {},
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: {
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Blue[500]
                : BrandSwatch.Light.Blue[600],
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            '&.MuiTypography-body1 > svg': {
              marginTop: 2,
            },
            '& svg:last-child': {
              marginLeft: 2,
            },
          },
        },
      },
      MuiMenuItem: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundColor: '#000000',
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {},
        styleOverrides: {
          input: {
            '&:-webkit-autofill': {
              webkitBoxShadow: '0 0 0 100px #1f2428 inset',
              borderRadius: 'none',
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 1,
          variant: 'elevation',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          rounded: {}, // Styles applied to the root element unless square={true}
          outlined: {}, // Styles applied to the root element if variant="outlined"
          elevation: {}, // Styles applied to the root element if variant="elevation"
        },
      },
      MuiRadio: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {},
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: 'standard',
        },
        styleOverrides: {
          select: {
            fontSize: 16,
          }, // Styles applied to the select component `select` class
          icon: {}, // Styles applied to the icon component
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {},
      },
      MuiSwitch: {
        defaultProps: {},
        styleOverrides: {
          root: {
            width: theme.spacing(32),
            height: theme.spacing(20),
            padding: theme.spacing(0),
          },
          switchBase: {
            height: theme.spacing(20),
            width: theme.spacing(20),
            padding: theme.spacing(0),
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
            },
          },
          track: {
            opacity: 1,
            borderRadius: theme.spacing(32),
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px',
          },
        },
      },
      MuiTab: {
        defaultProps: {
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[700]
                : BrandSwatch.Light.Grey[200],
          },
        },
      },
      MuiTabs: {
        defaultProps: {},
        styleOverrides: {},
      },
      MuiTableCell: {
        defaultProps: {},
        styleOverrides: {
          root: {
            padding: theme.spacing(10, 20),
            borderColor: theme.palette.divider,
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 600,
          },
          body: {
            color: theme.palette.text.secondary,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
        styleOverrides: {
          root: {
            fontSize: theme.typography.body2,
          },
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            background:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[900]
                : BrandSwatch.Light.Grey[100],
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          enterDelay: 400,
          enterNextDelay: 50,
          enterTouchDelay: 800,
          leaveDelay: 50,
          leaveTouchDelay: 1000,
        },
        styleOverrides: {
          tooltipArrow: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[300],
          },
          tooltip: {
            padding: theme.spacing(4, 0),
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[50]
                : BrandSwatch.Light.Grey[900],
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[700]
                : BrandSwatch.Light.Grey[300],
          },
        },
      },
      MuiTreeItem: {
        defaultProps: {},
        styleOverrides: {
          label: {
            fontSize: theme.typography.body2,
          },
        },
      },
    },
  }
}
