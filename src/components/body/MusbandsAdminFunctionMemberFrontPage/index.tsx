import React, { FC, Component, ReactNode } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import functionMemberFindByIdService from '../../../api/function-member/service/find/FunctionMemberFindByIdService'
import functionMemberFindAllService from '../../../api/function-member/service/find/FunctionMemberFindAllService'

// Create browser history
const history = createBrowserHistory()

/**
 * Function component MusbandsAdminFunctionMemberFindAll
 */
const MusbandsAdminFunctionMemberFindAllComponent: FC<{}> = () => {
  const service = functionMemberFindAllService()
  let results = null

  if (service.status === 'loaded' && service.payload) {
    results = service.payload
  }

  /**
   * @inheritdoc
   *
   * @override
   */
  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {results && results.length && (<div> {results.length} items found </div>)}
      { // eslint-disable-next-line @typescript-eslint/no-explicit-any
        results && results.map((functionMember: any) => (
          <div key={functionMember.id}>{functionMember.name}</div>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  )
}

/**
 * Define props for component MusbandsAdminFunctionMemberFindById
 */
interface MusbandsAdminFunctionMemberFindByIdComponentProps {
  id: number;
}

/**
 * Function Component MusbandsAdminFunctionMemberFindById
 *
 * @param props
 *    Object with props:
 *      id FunctionMemberModel id
 *
 * @see MusbandsAdminFunctionMemberFindByIdComponentProps
 */
const MusbandsAdminFunctionMemberFindByIdComponent: FC<MusbandsAdminFunctionMemberFindByIdComponentProps> = (props) => {
  const { id } = props
  const service = functionMemberFindByIdService(id)
  let result = null

  if (service.status === 'loaded' && service.payload) {
    result = service.payload
  }

  /**
   * @inheritdoc
   *
   * @override
   */
  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {result && (
        <div key={result.id}>{result.name}</div>
      )}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  )
}

/**
 * Front page component MusbandsAdminFunctionMemberFrontPage
 */
export class MusbandsAdminFunctionMemberFrontPage extends Component<{}, {}> {
  /**
   * @inheritdoc
   *
   * @override
   */
  render(): ReactNode {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <div className="flex flex-wrap mb-4">
              <div className="w-full h-12 bg-gray-500">
                <h1 className="font-semibold">Last Function Member</h1>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 h-12">
                <MusbandsAdminFunctionMemberFindByIdComponent id={9} />
              </div>
            </div>
            <hr />
            <div className="flex flex-wrap mb-4">
              <div className="w-full h-12 bg-gray-500">
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
