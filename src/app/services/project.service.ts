import { Injectable } from '@angular/core';
import { Project } from '@models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  get(data?: {[_: string]: any} | number): Project | Promise<Project> | Array<Project> | Promise<Array<Project>> | undefined {
    switch(typeof data) {
      case 'undefined':
        return [];
      case 'number':
        return new Promise<Project>(() => {
          return {
            resolve: (value: Project) => {
              return value;
            },
            reject: (reason?: any) => console.error(reason)
          }
        });
      case 'object':
        let p = new Project();
        for(let prop in data) {
          (p as any)[prop] = data[prop];
        }
        return p;
    }
    return undefined;
  }
}
