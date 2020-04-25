import { BaseAdminModel, BaseBuilder } from '../../common/model/BaseModel'
import { validate, validateOrReject, IsNotEmpty, IsString, IsDate, MaxLength, ValidationError } from 'class-validator'
//import { identifier, primitive, date, serializable } from 'serializr'
//import { DateTime } from 'luxon'

/**
 * Model function member
 */
export class FunctionMemberModel implements BaseAdminModel {
  //  @serializable(identifier())
    id?: number = null;

    @IsString()
    @IsNotEmpty({ message: 'The property $property is empty.' })
    @MaxLength(256, { message: 'The property $propety is too long. Maximal length is $constraint1 characters, but actual is $value' })
    //@serializable(primitive())
    name: string;

    @MaxLength(10000, { message: 'The property $propety is too long. Maximal length is $constraint1 characters, but actual is $value' })
    //@serializable(primitive())
    description?: string;

    @IsNotEmpty({ message: 'The property $property is empty.' })
    //@serializable(primitive())
    createdBy: string;

    @IsNotEmpty({ message: 'The property $property is empty.' })
    @IsDate({ message: 'The property $property is a datetime'})
    //@serializable(date())
    createdDate: Date;

    //@serializable(primitive())
    lastModifiedBy?: string;

    @IsDate({ message: 'The property $property is a datetime'})
   // @serializable(date())
    lastModifiedDate?: Date;

    /**
     * Default constructor
     *
     * @param builder
     *    FunctionMemberModelBuilder
     */
    constructor(builder: FunctionMemberModelBuilder) {
      this.id = builder.id
      this.name = builder.name
      this.description = builder.description
      this.createdBy = builder.createdBy
      this.createdDate = builder.createdDate
      this.lastModifiedBy = builder.lastModifiedBy
      this.lastModifiedDate = builder.lastModifiedDate
    }

    /**
     * @inheritdoc
     *
     * @example
     *  const functionMemberModel = new FunctionMemberModelBuilder()
     *    .setName(body.name)
     *    .setDescription(body.description)
     *    .build()
     *
     *  functionMemberModel.isValid().then(errors => { // errors is an array of validation errors
     *    if (errors.length > 0) {
     *      console.log("validation failed. errors: ", errors);
     *    } else {
     *      console.log("validation succeed");
     *    }
     *  })
     *
     * @override
     */
    async isValid(): Promise<ValidationError[]> {
      return await validate(this)
    }

    /**
     * @inheritdoc
     *
     * @example
     *  const functionMemberModel = new FunctionMemberModelBuilder()
     *    .setName(body.name)
     *    .setDescription(body.description)
     *    .build()
     *
     *    try {
     *      functionModel.isValidRejected()
     *    } catch(error) {
     *      console.log(error)
     *    }
     * @override
     */
    isValidRejected(): boolean | Error {
      const isValid = async (entity: FunctionMemberModel): Promise<void> => {
        await validateOrReject(entity)
      }

      try {
        isValid(this)
      } catch (error) {
        throw new Error('The following errors have ocurred: ${error}')
      }

      return true
    }
}

/**
 * FunctionModel builder
 */
export class FunctionMemberModelBuilder implements BaseBuilder<FunctionMemberModel> {
    _id: number = null;
    _name: string;
    _description?: string;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    _createdBy: string = 'musbands.admin';
    _createdDate: Date;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    _lastModifiedBy?: string = 'musbands.admin';
    _lastModifiedDate?: Date;

    /**
     * Getter id
     */
    get id(): number {
      return this._id
    }

    /**
     * Setter id
     *
     * @param id
     *      Id value
     * @returns
     *    FunctionMemberBuilder
     */
    setId(id?: number): FunctionMemberModelBuilder {
      this._id = id
      return this
    }

    /**
     * Getter name
     */
    get name(): string {
      return this._name
    }

    /**
     * Setter name
     *
     * @param name
     *      Name value
     * @returns
     *    FunctionMemberBuilder
     */
    setName(name: string): FunctionMemberModelBuilder {
      this._name = name
      return this
    }

    /**
     * Getter description
     */
    get description(): string {
      return this._description
    }

    /**
     * Setter description
     *
     * @param description
     *      Description value
     * @returns
     *    FunctionMemberBuilder
     */
    setDescription(description?: string): FunctionMemberModelBuilder {
      this._description = description
      return this
    }

    /**
     * Getter _createdBy
     */
    get createdBy(): string {
      return this._createdBy
    }

    /**
     * Setter _createdBy
     *
     * @param createdBy
     *    Created by value
     * @returns
     *    FunctionMemberBuilder
     */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    setCreatedBy(createdBy: string = 'musbands.admin'): FunctionMemberModelBuilder {
      this._createdBy = createdBy
      return this
    }

    /**
     * Getter _createdDate
     */
    get createdDate(): Date {
      return this._createdDate
    }

    /**
     * Setter _createdDate
     *
     * @param createdDate
     *    Created date value
     * @returns
     *    FunctionMemberBuilder
     */
    setCreatedDate(createdDate: Date = new Date()): FunctionMemberModelBuilder {
      this._createdDate = createdDate

      return this
    }

    /**
     * Getter _lastModifiedBy
     */
    get lastModifiedBy(): string {
      return this._lastModifiedBy
    }

    /**
     * Setter _lastModifiedBy
     *
     * @param lastModifiedBy
     *    Last modified by value
     * @returns
     *    FunctionMemberBuilder
     */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    setLastModifiedBy(lastModifiedBy: string = 'musbands.admin'): FunctionMemberModelBuilder {
      this._lastModifiedBy = lastModifiedBy
      return this
    }

    /**
     * Getter _lastModifiedDate
     *
     * @returns Date
     */
    get lastModifiedDate(): Date {
      return this._lastModifiedDate
    }

    /**
     * Setter _lastModifiedDate
     *
     * @param lastModifiedDate
     *    Last modified date value
     * @returns
     *    FunctionMemberBuilder
     */
    setLastModifiedDate(lastModifiedDate: Date = new Date()): FunctionMemberModelBuilder {
      this._lastModifiedDate = lastModifiedDate ? lastModifiedDate : null

      return this
    }

    /**
     * @inheritdoc
     * @override
     */
    build(): FunctionMemberModel {
      return new FunctionMemberModel(this)
    }
}
