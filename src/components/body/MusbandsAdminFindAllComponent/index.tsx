import React, { Component, ReactNode } from 'react'
import { BaseModel } from '../../../api/common/model/BaseModel'
import { BaseModelCollection } from '../../../api/common/collection/BaseModelCollection'
import { Service } from '../../../api/common/utils/types/Service'

/**
 * Define props
 */
export interface MusbandsAdminFindAllComponentProps<V extends BaseModelCollection<BaseModel>> {
    service: Service<V>;
}

/**
 * Function component MusbandsAdminFunctionMemberFindAll
 */
export class MusbandsAdminFindAllComponent<V extends BaseModelCollection<BaseModel>> extends Component<MusbandsAdminFindAllComponentProps<V>> {
  /**
   * @inheritdoc
   *
   * @override
   */
  render(): ReactNode {
    const { service } = this.props
    let results = null

    if (service.status === 'loaded' && service.payload) {
      results = service.payload
    }

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
}

export default MusbandsAdminFindAllComponent
