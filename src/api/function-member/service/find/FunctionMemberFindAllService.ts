import { FunctionMemberModel } from '../../model/FunctionMemberModel'

import { Service } from '../../../common/utils/types/Service'
import { FetchGetRequest } from '../../../common/utils/Fetch'
import baseFindAllService, { FindAllServiceResult } from '../../../common/service/find/BaseFindAllService'

const functionMemberFindAllService = (): Service<FindAllServiceResult<Array<FunctionMemberModel>>> => {
  const requestInfo = new FetchGetRequest('http://localhost:8085/api/admin/1.0/functionMembers', { method: 'pepito' })
  const result = baseFindAllService<Array<FunctionMemberModel>>(requestInfo)

  return result
}

export default functionMemberFindAllService
