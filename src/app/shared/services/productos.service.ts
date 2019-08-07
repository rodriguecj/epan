import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class ProductosService {
  public items:any = []
  constructor(public db: AngularFireDatabase) { 
    this.items = this.db.list('items').valueChanges()
  }
}