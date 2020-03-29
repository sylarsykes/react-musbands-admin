import React from 'react'
import { Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Create browser history
const history = createBrowserHistory()

export function MusbandsAdminMenu(): JSX.Element {
  return (
    <Router history={history}>
      <ul className="flex border-black border-b">
        <Link to="/"
          className="inline-block border-black border-t border-l border-r rounded-t py-2 px-4 text-black-500 hover:text-black-800 font-semibold">
            FrontPage
        </Link>
      </ul>
    </Router>
  )
}

export default MusbandsAdminMenu
