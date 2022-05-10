import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Project } from '@models/project';
import { Router } from '@angular/router';
import { ProjectService } from '@services/project.service';

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
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formData: {[_: string]: any}){
    let project: any = this.projectService.get(formData);
    project.save();
  }

}
