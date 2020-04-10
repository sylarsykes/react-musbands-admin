import React, { FC, Component, ReactNode } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import functionMemberFindAllService from '../../../api/function-member/service/find/FunctionMemberFindAllService'

// Create browser history
const history = createBrowserHistory()

const MusbandsAdminFunctionMemberFindAllComponent: FC<{}> = () => {
  const service = functionMemberFindAllService()
  let results = null

  if (service.status === 'loaded' && service.payload && service.payload.results) {
    results = service.payload.results
  }

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {results && results.map((functionMember: any) => (
        <div key={functionMember.id}>{functionMember.name}</div>
      ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  )
}

export class MusbandsAdminFunctionMemberFrontPage extends Component<{}, {}> {

  render(): ReactNode {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <div className="flex flex-wrap mb-4">
              <div className="w-full bg-gray-500 h-12">
                <h1 className="font-semibold">Function Member</h1>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 h-12">
                <MusbandsAdminFunctionMemberFindAllComponent />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default MusbandsAdminFunctionMemberFrontPage
