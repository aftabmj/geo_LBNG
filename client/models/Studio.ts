/* tslint:disable */
import {
  Hero
} from '../index';

declare var Object: any;
export interface StudioInterface {
  "name": string;
  "id"?: number;
  heroes?: Hero[];
}

export class Studio implements StudioInterface {
  "name": string;
  "id": number;
  heroes: Hero[];
  constructor(data?: StudioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Studio`.
   */
  public static getModelName() {
    return "Studio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Studio for dynamic purposes.
  **/
  public static factory(data: StudioInterface): Studio{
    return new Studio(data);
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
      name: 'Studio',
      plural: 'Studios',
      path: 'Studios',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        heroes: {
          name: 'heroes',
          type: 'Hero[]',
          model: 'Hero',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'studioId'
        },
      }
    }
  }
}
