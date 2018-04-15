/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Company } from '../../models/Company';
import { Project } from '../../models/Project';
import { CompanyProjects } from '../../models/CompanyProjects';
import { Hero } from '../../models/Hero';
import { Studio } from '../../models/Studio';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Company: Company,
    Project: Project,
    CompanyProjects: CompanyProjects,
    Hero: Hero,
    Studio: Studio,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
