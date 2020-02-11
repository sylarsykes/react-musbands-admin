import React from 'react';

// My components
import { MusbandsAdminHeaderLogo } from './MusbandsAdminHeaderLogo';
import { MusbandsAdminHeaderContent } from './MusbandsAdminHeaderContent';

// Component props
export interface MusbandsAdminHeaderProps {

}

// Functional component for header app.
export class MusbandsAdminHeader extends React.Component<MusbandsAdminHeaderProps, {}> {
	render() {
		return (
			<div className="flex">
				<MusbandsAdminHeaderLogo />
				<MusbandsAdminHeaderContent />
			</div>
		);
	}
}

export default MusbandsAdminHeader;