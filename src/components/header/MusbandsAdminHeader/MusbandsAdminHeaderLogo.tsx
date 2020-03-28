import React from 'react'

// FontAwesome imports
// Importing types from the API library along with other exports
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
  IconProp,
  SizeProp
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

library.add(faCompactDisc)

// Define IconProp
const compactDiscLookup: IconLookup = { prefix: 'fas', iconName: 'compact-disc' }
const compactDiscIconDefinition: IconDefinition = findIconDefinition(compactDiscLookup)

// Component props
export interface MusbandsAdminHeaderLogoProps {
	icon: IconProp;
	size?: SizeProp;
}

// Functional component logo for header app.
export class MusbandsAdminHeaderLogo extends React.Component<MusbandsAdminHeaderLogoProps, {}> {
  render(): React.ReactNode {
    // Destucturing props in constants
    const { icon, size } = this.props
    return (
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a className="justify-center items-center" href="https://github.com/sylarsykes/java-musbands-admin">
          <FontAwesomeIcon icon={ icon } size={ size } />
        </a>
        <span className="font-semibold text-xl tracking-tight">Musbands Admin</span>
      </div>
    )
  }
  // Assign default values in component props
  static defaultProps = {
    icon: compactDiscIconDefinition,
    size: '2x'
  }
}

export default MusbandsAdminHeaderLogo
