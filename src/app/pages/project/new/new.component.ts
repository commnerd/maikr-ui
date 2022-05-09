import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(project: Project){
    let proj = new Project(project);
    project.save().finally(() => {
      this.router.navigate(["projects"])
    });
  }

}
