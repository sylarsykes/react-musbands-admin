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
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

library.add(faCompactDisc);

// Define IconProp
const compactDiscLookup: IconLookup = { prefix: 'fas', iconName: 'compact-disc' }
const compactDiscIconDefinition: IconDefinition = findIconDefinition(compactDiscLookup)

// Component props
export interface MusbandsAdminHeaderLogoProps {
	icon: IconProp,
	classNameContainer?: string,
	classNameIcon?: string,
	size?: SizeProp
}

// Functional component logo for header app.
export class MusbandsAdminHeaderLogo extends React.Component<MusbandsAdminHeaderLogoProps, {}> {
	render() {
		const { icon, classNameContainer, classNameIcon, size } = this.props;
		return (
			<div className={ classNameContainer }>
				<a href="https://github.com/sylarsykes/java-musbands-admin" className="App-link">
					<FontAwesomeIcon className={ classNameIcon } icon={ icon } size={ size } />
					<span>Musbands Admin</span>
				</a>
			</div>
		);
	}
	// Assign default values in component props
	static defaultProps = {
		icon: compactDiscIconDefinition,
		classNameContainer: "App-header",
		classNameIcon: "App-logo",
		size: "2x"
	};
}

export default MusbandsAdminHeaderLogo;