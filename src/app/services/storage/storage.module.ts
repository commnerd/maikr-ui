import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DEFAULT_CONFIG, NgForageOptions, NgForageConfig, Driver} from 'ngforage';

@NgModule({
  providers: [
    {
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'ForageModule',
        driver: [ // defaults to indexedDB -> webSQL -> localStorage
          Driver.INDEXED_DB,
          Driver.LOCAL_STORAGE
        ]
      } as NgForageOptions
    }
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StorageModule {
  public constructor(ngfConfig: NgForageConfig) {
    ngfConfig.configure({
      name: 'ForageModule',
      driver: [ // defaults to indexedDB -> webSQL -> localStorage
        Driver.INDEXED_DB,
        Driver.LOCAL_STORAGE
      ]
    });
  }
}
