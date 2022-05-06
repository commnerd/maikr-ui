import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  private db: any;

  constructor (@Inject('Window') private window: Window) {
    window.indexedDB = window.indexedDB ||
                       window.mozIndexedDB ||
                       window.webkitIndexedDB ||
                       window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
                            window.webkitIDBTransaction ||
                            window.msIDBTransaction ||
                            {READ_WRITE: "readwrite"};

    window.IDBKeyRange = window.IDBKeyRange ||
                         window.webkitIDBKeyRange ||
                        window.msIDBKeyRange;

    // Let us open our database
    this.db = window.indexedDB.open("maikr_db", 3);
  }
}
