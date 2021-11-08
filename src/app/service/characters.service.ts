import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {
   endPoint: string = 'characters';

   getAll() {
     this.setEndPoint(this.endPoint);
     return this.get();
   }

   getSingle(id: any) {
    this.setEndPoint(`${this.endPoint}/${id}`);
    return this.get(); 
   }
  
}
