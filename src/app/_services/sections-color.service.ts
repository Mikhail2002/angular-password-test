import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsColorService {

  section1: string; 
  section2: string;
  section3: string;

  private colors = ['red', 'yellow', 'green']

  getColor(strength: number){
    let index = 0;
  
    if (strength === 1){
      index = 0;
    } else if (strength === 2) {
      index = 1;
    } else if (strength === 3) {
      index = 2;
    } else {
      index = 3;
    }
    
    return{
      index: index + 2, color: this.colors[index]
    };
  }

  setSectionsColor(quantity: number, color: string){
    for (let i = 0; i < quantity; i++){
      (this as any) ['section' + i] = color;
    }
  }
}
