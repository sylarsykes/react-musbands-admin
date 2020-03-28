import React from 'react'

// My components
import { MusbandsAdminHeaderLogo } from './MusbandsAdminHeaderLogo'
import { MusbandsAdminHeaderContent } from './MusbandsAdminHeaderContent'

// Component props

// Functional component for header app.
export function MusbandsAdminHeader() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <MusbandsAdminHeaderLogo />
        <MusbandsAdminHeaderContent />
      </div>
    </nav>
  )
}

export default MusbandsAdminHeader;