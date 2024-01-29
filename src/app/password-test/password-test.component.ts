import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  styleUrl: './password-test.component.css'
})
export class PasswordTestComponent implements OnInit{

  section1 = ''
  section2 = ''
  section3 = ''
  
  onPasswordChange(){
    const password = this.passwordForm.value.password
    this.setSectionsColor(4, '#DDD');
    
    if(password && this.passwordForm.valid){
      const color = this.getColor(this.checkStrength(password))
      this.setSectionsColor(color.index, color.color)
      const pwdStrength = this.checkStrength(password);
      

      switch(pwdStrength){

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
      } else if(!password){
        this.message = ''
        this.setSectionsColor(4, '#DDD');
      }
      else {
        this.message = 'This password is too short'
        this.setSectionsColor(4, 'red')
      }
  }
private colors = ['red', 'yellow', 'green']

message = '';
messageColor = '';
  
passwordForm = new FormGroup({
  password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8,}$/)])
})

 
checkStrength(password: string){

    let force = 0

    const letters = /[a-zA-Z]/.test(password)
    const digits = /[0-9]/.test(password)
    const symbols = /[!@#$%^&*]/.test(password)

    const flags = [letters, digits, symbols]

    let passedMatches = 0;
    for (const flag of flags){
      passedMatches += flag === true ? 1 : 0;
    }

    force += passedMatches;

    force = passedMatches === 1 ? Math.min(force, 1) : force;
    force = passedMatches === 2 ? Math.min(force, 2) : force;
    force = passedMatches === 3 ? Math.min(force, 3) : force;

    return force;
}

private getColor(strength: number){
  let index = 0;

  if (strength === 1){
    index = 0;
  } else if (strength === 2) {
    index = 1;
  } else if (strength === 3) {
    index = 2;
  }else{
    index = 3;
  }
  
  this.messageColor = this.colors[index]

  return{
    index: index + 2, color: this.colors[index]
  };
}

private setSectionsColor(quantity: number, color: string){
  for (let i = 0; i < quantity; i++){
    (this as any) ['section' + i] = color;
  }
}

ngOnInit(){
  this.setSectionsColor(4, '#DDD');
}

onSubmit(){}

}
