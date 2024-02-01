import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, RadioControlValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit{
  
  password: [pass: string | null, isValid: boolean | undefined]
  
  @Output() pass = new EventEmitter();

  private OnChange (value: string|null, isValid: boolean|undefined ){
    this.password = [value, isValid]
    this.pass.emit(this.password)
  };

  ngOnInit(): void {
    this.passwordForm.get("password")?.valueChanges.subscribe(pwd =>{
      const isValid = this.passwordForm.get("password")?.valid
      this.OnChange(pwd, isValid)
    });
  }

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8,}$/)])
  })

  writeValue(value: string): void {
    this.password[0] = value;
  }
  
  registerOnChange(fn:(value: string | null) => void) {
    this.OnChange = fn;
  }

  registerOnTouched(fn: () => void): void {}
  
  

  

  

}
