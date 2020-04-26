import { useEffect, useState } from 'react'

import { BaseModel } from '../../model/BaseModel'
import { Service } from '../../utils/types/Service'
import { Fetch, HttpResponse, FetchGetRequest } from '../../../common/utils/Fetch'

/**
 * Default implementation of find all service
 *
 * @param V
 *    Objects BaseModel type
 *
 * @returns Service<BaseModel>
 *    Return a service object with property result an object of type BaseModel with result
 */
const baseFindByIdService = <V extends BaseModel> (request: FetchGetRequest): Service<V> => {

  const [result, setResult] = useState<Service<V>>({
    status: 'loading'
  })

  useEffect(() => {
    // eslint-disable-next-line no-async-promise-executor
    const executeService = new Promise<HttpResponse<V>>(async (resolve, reject) => {
      const fetch = new Fetch<V>()
      let response: HttpResponse<V>

      try {
        response = await fetch.get<V>(request)
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

export default baseFindByIdService
