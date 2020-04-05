import { useEffect, useState } from 'react'

import { Service } from '../../../common/utils/types/Service'
import { FunctionMemberModel } from '../../model/FunctionMemberModel'

export interface FunctionMemberFindAllServiceResults {
    results: FunctionMemberModel[];
}

const functionMemberFindAllService = (): Service<FunctionMemberFindAllServiceResults> => {
  const [result, setResult] = useState<Service<FunctionMemberFindAllServiceResults>>({
    status: 'loading'
  })

  useEffect(() => {
    fetch('http://localhost:8085/api/admin/1.0/functionMembers', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: { results: response} }))
      .catch((error) => setResult({ status: 'error', error }))
  }, [])

  return result
}

export default functionMemberFindAllService
