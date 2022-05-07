import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectService } from '@services/project.service';
import { Project } from '@models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form: FormGroup = this.fb.group({
    'name': ['', Validators.compose([Validators.required])],
    'description': ['', Validators.compose([Validators.required])]
  });

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
    let project = this.projectService.get(0);
  }

  onSubmit(project: Project){
    this.projectService.save(project).finally(() => {
      this.router.navigate(["projects"])
    });
  }

}
