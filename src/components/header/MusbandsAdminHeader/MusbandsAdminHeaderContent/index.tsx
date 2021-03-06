import React from 'react'

// My components
import { MusbandsAdminHeaderTabsAccessAdministration } from './MusbandsAdminHeaderTabsAccessAdministration'

// Component props

// Functional component for header app.
export class MusbandsAdminHeaderContent extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
        <div className="w-3/4 h-12"></div>
        <MusbandsAdminHeaderTabsAccessAdministration />
      </div>
    )
  }
}

export default MusbandsAdminHeaderContent
