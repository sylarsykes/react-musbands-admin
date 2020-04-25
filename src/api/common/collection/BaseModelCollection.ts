import { BaseModel } from '../model/BaseModel'

/**
 * Commons collection
 */
export interface BaseModelCollection<T extends BaseModel> extends Array<T> {
    results: T;
}
