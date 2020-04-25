import { Service } from '../../../common/utils/types/Service'
import { FetchPostRequest } from '../../../common/utils/Fetch'
import { CREATE_SERVICE } from '../paths'
import { FunctionMemberModel, FunctionMemberModelBuilder } from '../../model/FunctionMemberModel'
import baseCreateService from '../../../common/service/create/BaseCreateService'

/**
 * Create function member service
 *
 * @param body
 *      Post object value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const functionMemberCreateService = (body: any): Service<FunctionMemberModel> => {
  const postBody = new FunctionMemberModelBuilder()
    .setName(body.name)
    .setDescription(body.description)
    .setCreatedDate()
    .build()

  const requestInfo = new FetchPostRequest<FunctionMemberModel>(CREATE_SERVICE, postBody)
  const result = baseCreateService<FunctionMemberModel>(requestInfo)

  return result
}

export default functionMemberCreateService
