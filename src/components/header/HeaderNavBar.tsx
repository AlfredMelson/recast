import * as React from 'react'
import { Link as MuiLink } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { dataDrawerOpenAtom } from '../../recoil'
import { Navigation } from './NavigationStyle'
import { getNextIndex } from './headerFunctions'
import { ProductDropDown } from './ProductDropDown'

export function HeaderNavBar() {
  //set visability of user json drawer
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  const navRef = React.useRef<HTMLUListElement | null>(null)

  function handleLeftRightArrow(
    event: React.KeyboardEvent,
    target: EventTarget | HTMLElement | null = event.target
  ) {
    if (navRef.current) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        let i = 0
        while (i < navRef.current.children.length) {
          const child = navRef.current.children.item(i)
          if (child && (target === child || child.contains(target as Node))) {
            const prevSibling = navRef.current.children.item(
              getNextIndex(event.key, i, navRef.current.children.length)
            )
            const htmlElement = prevSibling ? (prevSibling.firstChild as HTMLElement) : null
            if (htmlElement) {
              htmlElement.focus()
            }
          }
          i += 1
        }
      }
    }
  }

  return (
    <Navigation>
      <ul ref={navRef} onKeyDown={handleLeftRightArrow}>
        <li>
          <MuiLink sx={{ cursor: 'pointer' }} onClick={() => setDataDrawerOpen(true)}>
            JSON
          </MuiLink>
        </li>
        <ProductDropDown />
        <li>
          <Link to='/'>Instructions</Link>
        </li>
      </ul>
    </Navigation>
  )
}