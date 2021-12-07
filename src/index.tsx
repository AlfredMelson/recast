import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './app'
import MuiThemeProviderRoot from './style/MuiThemeProviderRoot'

// create entry point using unique id from Document
const rootElement = document.getElementById('app')
// test for root element prior to invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
// create root
const root = ReactDOM.createRoot(rootElement)
// initial render
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MuiThemeProviderRoot>
        <App />
      </MuiThemeProviderRoot>
    </RecoilRoot>
  </React.StrictMode>
)
