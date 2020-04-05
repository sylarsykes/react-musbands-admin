import React, { Component } from 'react'

// My components
import { MusbandsAdminHeader } from './components/header/MusbandsAdminHeader'
import { MusbandsAdminMenu } from './components/body/MusbandsAdminMenu'
import { MusbandsAdminFrontPage } from './components/body/MusbandsAdminFrontPage'
import { MusbandsAdminFunctionMemberFrontPage } from './components/body/MusbandsAdminFunctionMemberFrontPage'

export class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="sticky top-0 musbands-css-header-background">
          <MusbandsAdminHeader />
        </header>
        <hr />
        <MusbandsAdminMenu />
        <MusbandsAdminFunctionMemberFrontPage />
      </div>
    )
  }
}

export default App
