import React from 'react'

// My components
import { MusbandsAdminHeader } from './components/header/MusbandsAdminHeader'
import { MusbandsAdminMenu } from './components/body/MusbandsAdminMenu'
import { MusbandsAdminFrontPage } from './components/body/MusbandsAdminFrontPage'

export class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="sticky top-0 musbands-css-header-background">
          <MusbandsAdminHeader />
        </header>
        <hr />
        <MusbandsAdminMenu />
        <MusbandsAdminFrontPage />
      </div>
    )
  }
}

export default App
