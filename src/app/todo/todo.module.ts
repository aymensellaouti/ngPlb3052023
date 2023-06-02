import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoComponent } from "./todo/todo.component";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TodoComponent }]),
  ],
})
export class TodoModule {}
