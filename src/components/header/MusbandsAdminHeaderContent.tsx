import React from 'react';

// My components
import { MusbandsAdminHeaderAccessProfile } from './MusbandsAdminHeaderAccessProfile';

// Component props
export interface MusbandsAdminHeaderContentProps {
  classNameContainer?: string
}

// Functional component for header app.
export class MusbandsAdminHeaderContent extends React.Component<MusbandsAdminHeaderContentProps, {}> {
	render() {
    const { classNameContainer } = this.props;
		return (
            <div className={ classNameContainer } >
              <MusbandsAdminHeaderAccessProfile />
            </div>
		);
  }
  static defaultProps = {
		classNameContainer: "AppHeader__content"
	};
}

export default MusbandsAdminHeaderContent;