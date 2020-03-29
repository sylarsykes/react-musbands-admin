import React from 'react'

// My components
import { MusbandsAdminHeaderLogo } from './MusbandsAdminHeaderLogo'
import { MusbandsAdminHeaderContent } from './MusbandsAdminHeaderContent'

// Component props

// Functional component for header app.
export function MusbandsAdminHeader(): JSX.Element {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <MusbandsAdminHeaderLogo />
        <MusbandsAdminHeaderContent />
      </div>
    </nav>
  )
}

export default MusbandsAdminHeader;