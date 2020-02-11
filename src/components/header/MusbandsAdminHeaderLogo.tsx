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
	size?: SizeProp
}

// Functional component logo for header app.
export class MusbandsAdminHeaderLogo extends React.Component<MusbandsAdminHeaderLogoProps, {}> {
	render() {
		const { icon, size } = this.props;
		return (
			<div className="w-1/4 bg-gray-500 h-12">
				<div className="flex mb-4">
					<div className="w-1/6 bg-gray-400 h-12 items-center">
						<a className="justify-center items-center" href="https://github.com/sylarsykes/java-musbands-admin">
							<FontAwesomeIcon icon={ icon } size={ size } />
						</a>
					</div>
					<div className="w-1 bg-black mt-0 mx-4 h-12"></div>
					<div className="w-4/5 bg-gray-400 h-12 items-center">Musbands Admin</div>
				</div>
			</div>
		);
	}
	// Assign default values in component props
	static defaultProps = {
		icon: compactDiscIconDefinition,
		size: "2x"
	};
}

export default MusbandsAdminHeaderLogo;