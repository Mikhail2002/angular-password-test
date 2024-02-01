import { Injectable } from '@angular/core';
import { SectionsColorService } from './sections-color.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor(private sectionsColorService: SectionsColorService) { }

  message: string

  public testPassword(password: string){
  
    this.sectionsColorService.setSectionsColor(4, '#DDD')

    if(password[0] && password[1]){
      const passwordStrength = this.checkStrength(password[0]);
      const color = this.sectionsColorService.getColor(passwordStrength);
      this.sectionsColorService.setSectionsColor(color.index, color.color); 

      switch(passwordStrength){
        case 1:
          this.message = 'This password is easy'
          break;
      case 2:
        this.message = 'This password is medium'
        break;
      case 3: 
        this.message = 'This password is strong'
        break;
      }

    } else if (!password[0]) {
    this.message = ''
    this.sectionsColorService.setSectionsColor(4, "#DDD")
    } else {
      this.message = 'Min. length = 8 (a-z, 0-9, symbols)'
      this.sectionsColorService.setSectionsColor(4, 'red') 
    }
  }

  public checkStrength(password: string){

    const letters = /[a-zA-Z]/.test(password)
    const digits = /[0-9]/.test(password)
    const symbols = /[!@#$%^&*]/.test(password)
  
    const flags = [letters, digits, symbols]
  
    let passedMatches = 0;
    for (const flag of flags){
      passedMatches += flag === true ? 1 : 0;
    }
  
    return passedMatches;
  }

  
}
