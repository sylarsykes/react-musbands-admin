import React from 'react'

// My components
import { MusbandsAdminHeaderLogo } from './MusbandsAdminHeaderLogo'
import { MusbandsAdminHeaderContent } from './MusbandsAdminHeaderContent'

// Component props

// Functional component for header app.
export class MusbandsAdminHeader extends React.Component<{}, {}> {
  render() {
    return (
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <MusbandsAdminHeaderLogo />
        <MusbandsAdminHeaderContent />
      </div>
    )
  }
}

export default MusbandsAdminHeader;