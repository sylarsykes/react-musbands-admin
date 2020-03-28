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
import { createBrowserHistory } from 'history';

library.add(faUserCog, faCog)

// Define IconProp
const userCogLookup: IconLookup = { prefix: 'fas', iconName: 'user-cog' }
const userCogIconDefinition: IconDefinition = findIconDefinition(userCogLookup)
const cogLookup: IconLookup = { prefix: 'fas', iconName: 'cog' }
const cogIconDefinition: IconDefinition = findIconDefinition(cogLookup)
const history = createBrowserHistory();

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
          <ul className="flex border-black border-b">
            <li className="-mb-px mr-1">
              <Link className="inline-block border-black border-l border-t rounded-t py-2 px-4 text-black-700 font-semibold" to="https://github.com/sylarsykes/java-musbands-admin">
                <FontAwesomeIcon icon={ iconUser } size={ sizeIconUser } />
              </Link>
            </li>
            <li className="mr-1">
              <Link to="/admin-tables" className="inline-block border-black border-t border-l border-r rounded-t py-2 px-4 text-black-500 hover:text-black-800 font-semibold">
                <FontAwesomeIcon icon={ iconGear } size={ sizeIconGear } />
              </Link>
            </li>
          </ul>
        </div>
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
