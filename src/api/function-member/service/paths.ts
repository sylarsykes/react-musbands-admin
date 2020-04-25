import { API } from '../../common/service/basePaths'

/**
 * File with paths of services
 */

// Find
export const FIND_ALL_SERVICE = API + 'functionMembers'
export const FIND_ALL_BY_EXAMPLE = API + 'functionMembers/findAll/example'
export const FIND_BY_NAME = API + 'functionMembers/findOne/name/{name}'
export const FIND_BY_EXAMPLE = API + 'functionMembers/findOne/example'

// CRUD
export const CREATE_SERVICE = API + 'functionMembers'
export const FIND_BY_ID_SERVICE = API + 'functionMembers/findOne/id/{id}'
export const UPDATE_SERVICE = API + 'functionMembers/{id}'
export const DELETE_SERVICE = API + 'functionMembers/{id}'
