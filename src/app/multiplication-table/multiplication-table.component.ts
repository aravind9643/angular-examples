import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.css'
})
export class MultiplicationTableComponent {
  number: number = 1;
  multplicationTable: string[] = [];

  submit() {
    this.multplicationTable = [];
    for (let i = 1; i <= 10; i++) {
      const item = `${this.number} * ${i} = ${this.number * i}`;
      this.multplicationTable.push(item);
    }
  }
}
