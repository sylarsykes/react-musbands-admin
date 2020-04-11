import { BaseModel } from '../model/BaseModel'

/**
 * Generics http response
 */
export interface HttpResponse<T> extends Response {
  result?: T;
}

/**
 * RequestInit object for get method
 */
export class FetchGetRequest {
  path: string
  args: RequestInit = { method: 'get' }

  /**
   * Default constructor
   *
   * @param path
   *    Service url
   * @param args
   *    RequestInit object
   */
  constructor(path: string, args?: RequestInit) {
    this.path = path
    // Exclude property method
    const { method, ...requestInitArgs } = args
    this.args = requestInitArgs
  }
}

/**
 * RequestInit object for post method
 */
export class FetchPostRequest<T extends BaseModel> {
  path: string
  body: T
  args: RequestInit = { method: 'post', body: JSON.stringify(this.body) }

  /**
   * Default constructor
   *
   * @param path
   *    Service url
   * @param body
   *    Post object
   * @param args
   *    Request init object
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(path: string, postBody: T, args?: RequestInit) {
    this.path = path
    this.body = postBody

    // Exclude method and body value
    const { method, body, ...requestInitArgs } = args
    this.args = requestInitArgs
  }
}

/**
 * RequestInit object for put method
 */
export class FetchPutRequest<T extends BaseModel> {
  path: string
  body: T
  args: RequestInit = { method: 'put', body: JSON.stringify(this.body) }

  /**
   * Default constructor
   *
   * @param path
   *    Service url
   * @param body
   *    Put object
   * @param args
   *    Request init object
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(path: string, putBody: T, args?: RequestInit) {
    this.path = path
    this.body = putBody

    // Exclude method and body value
    const { method, body, ...requestInitArgs } = args
    this.args = requestInitArgs
  }
}

/**
 * Fetch class
 */
export class Fetch<T> {
  /**
   * Fetch http
   *
   * @param request
   */
  async http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request)

    try {
      response.result = await response.json()
    } catch (error) {
      throw new Error(error)
    }

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response
  }

  /**
   * Fetch method GET
   *
   * @param request
   */
  async get<T>(request: FetchGetRequest): Promise<HttpResponse<T>> {
    return await this.http<T>(new Request(request.path, request.args))
  }

  /**
   * Fetch method POST
   *
   * @param request
   */
  async post<T extends BaseModel>(request: FetchPostRequest<T>): Promise<HttpResponse<T>> {
    return await this.http<T>(new Request(request.path, request.args))
  }

  /**
   * Fetch method PUT
   *
   * @param request
   */
  async put<T extends BaseModel>(request: FetchPutRequest<T>): Promise<HttpResponse<T>> {
    return await this.http<T>(new Request(request.path, request.args))
  }
}
