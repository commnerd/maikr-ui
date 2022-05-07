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
    let projectIndex = await instance.getItem("project_index") as unknown as number || 0;
    let savedProject = await instance.setItem<Project>("project_" + projectIndex.toString(), project);
    await instance.setItem<number>("project_index", projectIndex + 1);
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
