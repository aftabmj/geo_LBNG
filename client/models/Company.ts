/* tslint:disable */

declare var Object: any;
export interface CompanyInterface {
  "id": number;
  "name": string;
  "location": string;
  "founded"?: Date;
}

export class Company implements CompanyInterface {
  "id": number;
  "name": string;
  "location": string;
  "founded": Date;
  constructor(data?: CompanyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Company`.
   */
  public static getModelName() {
    return "Company";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Company for dynamic purposes.
  **/
  public static factory(data: CompanyInterface): Company{
    return new Company(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Company',
      plural: 'Companies',
      path: 'Companies',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "founded": {
          name: 'founded',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
