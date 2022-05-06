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

  save(project: Project): Observable<Project> {
    let instance = this.ngForageFactory.getInstance({});
    let nextIndex = instance.length;
    instance.setItem<Project>(nextIndex.toString(), project);
    return instance.getItem(nextIndex.toString()) as unknown as Observable<Project>;
  }

  get(id: number): Observable<Project> {
    let instance = this.ngForageFactory.getInstance({});
    return instance.getItem(id.toString()) as unknown as Observable<Project>;
  }

  delete(): boolean {
    return true;
  }

}
