import React from 'react';

// My components
import { MusbandsAdminHeaderAccessProfile } from './MusbandsAdminHeaderAccessProfile';

// Component props
export interface MusbandsAdminHeaderContentProps {

}

// Functional component for header app.
export class MusbandsAdminHeaderContent extends React.Component<MusbandsAdminHeaderContentProps, {}> {
	render() {
		return (
      <div className="w-3/4 bg-gray-500 h-12" >
        <div className="flex">
          <div className="w-3/4 bg-gray-500 h-12"></div>
          <MusbandsAdminHeaderAccessProfile />
        </div>
      </div>
		);
  }
}

export default MusbandsAdminHeaderContent;