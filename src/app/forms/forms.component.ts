import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(
    private globalService: GlobalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.minLength(6)]],
      mobile_number: ["", [Validators.required, Validators.minLength(10)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    });
  }


  submit(registerForm: any) {
    if (registerForm.valid) {
      this.globalService.success("Success", "Registered Successfully");
      console.log(registerForm.value);
    }
  }

  submitReactiveForm() {
    if (this.registerForm.valid) {
      this.globalService.success("Success", "Registered Successfully");
      console.log(this.registerForm.value);
    }
  }

}
