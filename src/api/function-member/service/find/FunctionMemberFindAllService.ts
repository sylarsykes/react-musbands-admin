import { Service } from '../../../common/utils/types/Service'
import { FetchGetRequest } from '../../../common/utils/Fetch'
import { FIND_ALL_SERVICE } from '../paths'
import baseFindAllService from '../../../common/service/find/BaseFindAllService'

import { FunctionMemberCollection } from '../../collection/FunctionMemberCollection'

/**
 * Implementation of find all service
 */
const functionMemberFindAllService = (): Service<FunctionMemberCollection> => {
  const requestInfo = new FetchGetRequest(FIND_ALL_SERVICE)
  const result = baseFindAllService<FunctionMemberCollection>(requestInfo)

  return result
}

export default functionMemberFindAllService
