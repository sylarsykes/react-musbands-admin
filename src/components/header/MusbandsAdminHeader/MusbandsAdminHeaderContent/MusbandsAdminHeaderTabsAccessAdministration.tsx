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
import { faUserCog, faCog } from '@fortawesome/free-solid-svg-icons'
import { Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

library.add(faUserCog, faCog)

// Define IconProp
const userCogLookup: IconLookup = { prefix: 'fas', iconName: 'user-cog' }
const userCogIconDefinition: IconDefinition = findIconDefinition(userCogLookup)
const cogLookup: IconLookup = { prefix: 'fas', iconName: 'cog' }
const cogIconDefinition: IconDefinition = findIconDefinition(cogLookup)

// Create browser history
const history = createBrowserHistory()

// Component props
export interface MusbandsAdminHeaderTabsAccessAdministrationProps {
    iconUser: IconProp;
    sizeIconUser?: SizeProp;
    iconGear: IconProp;
    sizeIconGear?: SizeProp;
}

// Functional component logo for header app.
// Destructuring props in constants
export class MusbandsAdminHeaderTabsAccessAdministration extends React.Component<MusbandsAdminHeaderTabsAccessAdministrationProps, {}> {
  render(): React.ReactNode {
    const {
      iconUser,
      sizeIconUser,
      iconGear,
      sizeIconGear
    } = this.props
    return (
      <Router history={history}>
        <div>
          <ul className="flex">
            <li className="-mb-px mr-1 p-5">
              <Link to="https://github.com/sylarsykes/java-musbands-admin"
                className="inline-block text-white-700 hover:text-white-800 font-semibold">
                <FontAwesomeIcon icon={ iconUser } size={ sizeIconUser } />
              </Link>
            </li>
            <li className="mr-1 p-5">
              <Link to="/"
                className="inline-block text-white-700 hover:text-white-800 font-semibold">
                <FontAwesomeIcon icon={ iconGear } size={ sizeIconGear } />
              </Link>
            </li>
          </ul>
        </div>
        <hr />
      </Router>
    )
  }
  // Assign default values in component props
  static defaultProps = {
    iconUser: userCogIconDefinition,
    sizeIconUser: '2x',
    iconGear: cogIconDefinition,
    sizeIconGear: '2x'
  }
}

export default MusbandsAdminHeaderTabsAccessAdministration
