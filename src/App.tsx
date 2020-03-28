import React from 'react'

// My components
import { MusbandsAdminHeader } from './components/header/MusbandsAdminHeader'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="sticky top-0 bg-white">
          <MusbandsAdminHeader />
        </header>
        <h1>Musbands Admin, administration web page for manage master tables for <a href="https://github.com/sylarsykes/java-musbands-admin">Musbands Admin API </a> </h1>
      </div>
    )
  }
}

export default App
