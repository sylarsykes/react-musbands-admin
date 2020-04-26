import { API } from '../../common/service/basePaths'

/**
 * File with paths of services
 */

// Find
export const FIND_ALL_SERVICE = API + 'functionMembers'
export const FIND_ALL_BY_EXAMPLE = API + 'functionMembers/findAll/example'
export const FIND_BY_NAME = (name: string): string => eval('`' + API + 'functionMembers/findOne/name/${name}' + '`')
export const FIND_BY_EXAMPLE = API + 'functionMembers/findOne/example'

// CRUD
export const CREATE_SERVICE = API + 'functionMembers'
export const FIND_BY_ID_SERVICE =  (id: number): string => eval('`' + API + 'functionMembers/findOne/id/${id}' + '`')
export const UPDATE_SERVICE = (id: number): string => eval('`' + API + 'functionMembers/${id}' + '`')
export const DELETE_SERVICE = (id: number): string => eval('`' + API + 'functionMembers/${id}' + '`')

