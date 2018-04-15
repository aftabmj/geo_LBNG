/* tslint:disable */
import {
  Studio
} from '../index';

declare var Object: any;
export interface HeroInterface {
  "name": string;
  "studioId"?: number;
  "id"?: number;
  studio?: Studio;
}

export class Hero implements HeroInterface {
  "name": string;
  "studioId": number;
  "id": number;
  studio: Studio;
  constructor(data?: HeroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Hero`.
   */
  public static getModelName() {
    return "Hero";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Hero for dynamic purposes.
  **/
  public static factory(data: HeroInterface): Hero{
    return new Hero(data);
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
      name: 'Hero',
      plural: 'heroes',
      path: 'heroes',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "studioId": {
          name: 'studioId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        studio: {
          name: 'studio',
          type: 'Studio',
          model: 'Studio',
          relationType: 'belongsTo',
                  keyFrom: 'studioId',
          keyTo: 'id'
        },
      }
    }
  }
}
