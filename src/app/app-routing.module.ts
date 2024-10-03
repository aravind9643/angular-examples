import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calculator', component: CalculatorComponent, canActivate: [authGuard] },
  { path: 'forms', component: FormsComponent, canActivate: [authGuard] },
  { path: 'todos', component: TodosComponent, canActivate: [authGuard] },
  { path: 'multiplication-table', component: MultiplicationTableComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'product', component: ProductComponent, canActivate: [authGuard] },
  { path: 'product/:id', component: ProductComponent, canActivate: [authGuard] },
  { path: "", redirectTo: 'calculator', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
