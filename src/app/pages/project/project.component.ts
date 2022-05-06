import { OnInit } from '@angular/core';
import { MaikrComponent } from '@decorators/maikr-forms';

@MaikrComponent({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
