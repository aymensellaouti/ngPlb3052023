import { Pipe, PipeTransform } from '@angular/core';
import  memo from 'memo-decorator';
@Pipe({
  name: 'fibo',
})
export class FiboPipe implements PipeTransform {
  @memo()
  private fibonnaci(n: number): number {
    console.log(n);
    if (n == 0 || n == 1) return 1;
    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }
  @memo()
  transform(n: number): number {
    console.log(n);
    return this.fibonnaci(n);
  }
}
