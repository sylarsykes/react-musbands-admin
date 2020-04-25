import { useEffect, useState } from 'react'
import { ValidationError } from 'class-validator'

import { BaseModel } from '../../model/BaseModel'
import { Service } from '../../utils/types/Service'
import { Fetch, HttpResponse, FetchPostRequest } from '../../../common/utils/Fetch'

/**
 * Default implementation of find all service
 *
 * @param V
 *    Objects BaseModel type
 *
 * @param request
 *    Post request object
 *
 * @returns Service<FindAllServiceResult<V>>
 *    Return a service object with property result an object of type FindAllServiceResult<V> with result
 */
const baseCreateService = <V extends BaseModel>(request: FetchPostRequest<V>): Service<V> => {
  const [result, setResult] = useState<Service<V>>({
    status: 'loading'
  })

  useEffect(() => {
    // eslint-disable-next-line no-async-promise-executor
    const executeService = new Promise<HttpResponse<V>>(async (resolve, reject) => {
      const fetch = new Fetch<V>()
      let response: HttpResponse<V>
      let isValidBody: ValidationError[]

      try {
        isValidBody = await request.body.isValid()

        if (isValidBody.length > 0) {
          reject(isValidBody)
        }

        response = await fetch.post<V>(request)
      } catch (error) {
        reject(error)
      }

      resolve(response)
    })

    executeService
      .then((response) => setResult({ status: 'loaded', payload: response.result }))
      .catch((error) => setResult({ status: 'error', error }))
  }, [])

  return result
}

export default baseCreateService
