import { Component} from '@angular/core';
import { PasswordStrengthService } from '../_services/password-strength.service';
import { SectionsColorService } from '../_services/sections-color.service';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  styleUrl: './password-test.component.css'
})
export class PasswordTestComponent{
  constructor (
    private passwordStrengthService: PasswordStrengthService,
    private sectionColorService: SectionsColorService
    ) {}

  section1: string 
  section2: string  
  section3: string  

  message: string

  public testPassword(password: string){
    this.passwordStrengthService.testPassword(password);

    this.section1 = this.sectionColorService.section1;
    this.section2 = this.sectionColorService.section2;
    this.section3 = this.sectionColorService.section3;

    this.message = this.passwordStrengthService.message;
  } 
    
  
}
