import React from 'react';

// FontAwesome imports
// Importing types from the API library along with other exports
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
  IconProp,
  SizeProp
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCog, faCog);

// Define IconProp
const userCogLookup: IconLookup = { prefix: 'fas', iconName: 'user-cog' }
const userCogIconDefinition: IconDefinition = findIconDefinition(userCogLookup)
const cogLookup: IconLookup = { prefix: 'fas', iconName: 'cog' }
const cogIconDefinition: IconDefinition = findIconDefinition(cogLookup)

// Component props
export interface MusbandsAdminHeaderAccessProfileProps {
    iconUser: IconProp,
    sizeIconUser?: SizeProp
    iconGear: IconProp,
    sizeIconGear?: SizeProp
}

// Functional component logo for header app.
export class MusbandsAdminHeaderAccessProfile extends React.Component<MusbandsAdminHeaderAccessProfileProps, {}> {
	render() {
        const {
            iconUser,
            sizeIconUser,
            iconGear,
            sizeIconGear
        } = this.props;
		return (
            <div className="w-1/4 bg-gray-500 h-12">
                <div className="flex mb-4">
                    <div className="w-1/2 bg-gray-400 h-12 items-center">
                        <a className="items-center" href="https://github.com/sylarsykes/java-musbands-admin">
                            <FontAwesomeIcon icon={ iconUser } size={ sizeIconUser } />
                        </a>
                    </div>
                    <div className="bg-black mt-0 mx-4 h-12 w-1"></div>
                    <div className="w-1/2 bg-gray-400 h-12 items-center">
                        <a className="items-center" href="https://github.com/sylarsykes/java-musbands-admin">
                            <FontAwesomeIcon icon={ iconGear } size={ sizeIconGear } />
                        </a>
                    </div>
                </div>
			</div>
		);
	}
	// Assign default values in component props
	static defaultProps = {
        iconUser: userCogIconDefinition,
        sizeIconUser: "2x",
        iconGear: cogIconDefinition,
        sizeIconGear: "2x"
	};
}

export default MusbandsAdminHeaderAccessProfile;