import { useEffect, useState } from 'react'

import { BaseModel } from '../../model/BaseModel'
import { Service } from '../../utils/types/Service'
import { Fetch, HttpResponse, FetchGetRequest } from '../../../common/utils/Fetch'

/**
 * Generics result of find all service
 *
 * @param T List of objects BaseModel type
 *
 * @class
 */
export class FindAllServiceResult<T extends Array<BaseModel>> {
    results: T;

    constructor(results: T) {
      this.results = results
    }
}

/**
 * Default implementation of find all service
 *
 * @param V
 *    List of objects BaseModel type
 *
 * @returns Service<FindAllServiceResult<V>>
 *    Return a service object with property result an object of type FindAllServiceResult<V> with result
 */
const baseFindAllService = <V extends Array<BaseModel>>(request: FetchGetRequest): Service<FindAllServiceResult<V>> => {
  const [result, setResult] = useState<Service<FindAllServiceResult<V>>>({
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
      .then((response) => setResult({ status: 'loaded', payload: new FindAllServiceResult<V>(response.result) }))
      .catch((error) => setResult({ status: 'error', error }))
  }, [])

  return result
}

export default baseFindAllService
