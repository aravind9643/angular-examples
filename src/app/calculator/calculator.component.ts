import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calcInput = "";

  constructor(
    private globalService: GlobalService
  ) { }

  //Template Driven
  // Name*
  // Name is required
  // Age*
  // Age is required
  // Adddress*
  // Address is required
  // Save
  //Reactive Forms
  // FormGroup, FormControl
  // Api Calls
  // fetch
  // HttpClient, Http Interceptors(headers, data manipute)
  // Types
  // ngModel, *ngFor, *ngIf, {{}}, Dynamic Binding
  // rxjs library, libraries 
  // css, scss, sass
  // js, ts
  // Gaurds - for routes restriction

  appendToCalculator(input: any) {
    // this.calcInput += input;
    // "" + "1" = "1"
    // "1" + "2" = "12"
    // 1 + 2 = 3
    // 1.5 + 2 = 3.5
    this.calcInput = this.calcInput + input;
  }

  clearInput() {
    this.calcInput = "";
  }

  evalute() {
    this.calcInput = eval(this.calcInput);
    this.globalService.success("Hello", "Expression executed");
  }

  watchInput(event: any) {
    event.target.value = event.target.value.replace(/[^0-9*+\/-]/g, "");
    this.calcInput = event.target.value;
  }

  // Input number 3
  // 3 * 1 = 3
  // 3 * 2 = 6
  // .
  // .
  // .
  // .
  // .
  // .
  // .
  // 3 * 10 = 30
  // Fibonacci number
  // Shapes 
  // *
  // **
  // ***
}
