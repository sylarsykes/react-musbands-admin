import { ValidationError } from 'class-validator'

export interface BaseBuilder<T extends BaseModel> {
  /**
   * Build object
   */
  build(): T;
}

/**
 * Commons model
 */
export interface BaseModel {
  readonly id?: number;

  /**
   * Check if model is value
   */
  isValid(): Promise<ValidationError[]>;

  /**
   * Check if model is value
   *
   * @returns boolean
   *    true is valid entity
   */
  isValidRejected(): boolean | Error;
}

export interface BaseAdminModel extends BaseModel {
  createdBy: string;
  createdDate: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}
