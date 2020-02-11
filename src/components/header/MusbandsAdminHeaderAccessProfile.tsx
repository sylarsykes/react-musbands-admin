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
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCog);

// Define IconProp
const userCogLookup: IconLookup = { prefix: 'fas', iconName: 'user-cog' }
const userCogIconDefinition: IconDefinition = findIconDefinition(userCogLookup)

// Component props
export interface MusbandsAdminHeaderAccessProfileProps {
	icon: IconProp,
	classNameContainer?: string,
	classNameIcon?: string,
	size?: SizeProp
}

// Functional component logo for header app.
export class MusbandsAdminHeaderAccessProfile extends React.Component<MusbandsAdminHeaderAccessProfileProps, {}> {
	render() {
		const { icon, classNameContainer, classNameIcon, size } = this.props;
		return (
			<div className={ classNameContainer }>
				<a href="https://github.com/sylarsykes/java-musbands-admin" className="App-link">
					<FontAwesomeIcon className={ classNameIcon } icon={ icon } size={ size } />
				</a>
			</div>
		);
	}
	// Assign default values in component props
	static defaultProps = {
		icon: userCogIconDefinition,
		classNameContainer: "App-link",
		classNameIcon: "",
		size: "2x"
	};
}

export default MusbandsAdminHeaderAccessProfile;