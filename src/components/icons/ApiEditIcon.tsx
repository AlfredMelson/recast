import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function ApiEditIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon style={{ width: 16, height: 16 }} {...props}>
      <path d='M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z'></path>
    </SvgIcon>
  )
}