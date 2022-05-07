import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { InstanceFactory } from 'ngforage';

import { Project } from '@models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private ngForageFactory: InstanceFactory
  ) {}

  async save(project: Project): Promise<Project> {
    let instance = this.ngForageFactory.getInstance({});
    let length = await instance.length();
    console.log(project);
    let savedProject = await instance.setItem<Project>(length.toString(), project);
    return savedProject;
  }

  get(id: number): Observable<Project> {
    let instance = this.ngForageFactory.getInstance({});
    return instance.getItem(id.toString()) as unknown as Observable<Project>;
  }

  delete(): boolean {
    return true;
  }

}
