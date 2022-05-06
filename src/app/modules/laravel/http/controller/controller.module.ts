import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { ControllerRoutingModule } from './controller-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ],
})
export class ControllerModule { }
