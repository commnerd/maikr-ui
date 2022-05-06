import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerModule } from './controller/controller.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControllerModule,
  ],
  exports: [
    ControllerModule
  ]
})
export class HttpModule { }
