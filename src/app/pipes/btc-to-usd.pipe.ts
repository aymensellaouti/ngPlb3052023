import { Pipe, PipeTransform } from '@angular/core';
const BTC_CHANGE = 26896;
@Pipe({
  name: 'btcToUsd',
  pure: true
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number): number {
    return amount * BTC_CHANGE;
  }

}
