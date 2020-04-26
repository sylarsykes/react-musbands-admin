import { Service } from '../../../common/utils/types/Service'
import { FetchGetRequest } from '../../../common/utils/Fetch'
import { FIND_BY_ID_SERVICE } from '../paths'
import baseFindByIdService from '../../../common/service/find/BaseFindByIdService'

import { FunctionMemberModel } from '../../model/FunctionMemberModel'

/**
 * Implementation of find by id service
 *
 * @param id
 *      FunctionMemberModel id
 */
const functionMemberFindByIdService = (id: number): Service<FunctionMemberModel> => {
  const requestInfo = new FetchGetRequest(FIND_BY_ID_SERVICE(id))
  console.log(requestInfo)

  const result = baseFindByIdService<FunctionMemberModel>(requestInfo)

  return result
}

export default functionMemberFindByIdService
