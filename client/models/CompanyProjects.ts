/* tslint:disable */

declare var Object: any;
export interface CompanyProjectsInterface {
  "id": number;
  "companyId": number;
  "projectId": number;
}

export class CompanyProjects implements CompanyProjectsInterface {
  "id": number;
  "companyId": number;
  "projectId": number;
  constructor(data?: CompanyProjectsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CompanyProjects`.
   */
  public static getModelName() {
    return "CompanyProjects";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CompanyProjects for dynamic purposes.
  **/
  public static factory(data: CompanyProjectsInterface): CompanyProjects{
    return new CompanyProjects(data);
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
      name: 'CompanyProjects',
      plural: 'CompanyProjects',
      path: 'CompanyProjects',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "companyId": {
          name: 'companyId',
          type: 'number'
        },
        "projectId": {
          name: 'projectId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
