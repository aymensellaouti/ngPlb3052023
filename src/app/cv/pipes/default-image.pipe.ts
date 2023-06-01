import { Pipe, PipeTransform } from '@angular/core';
import { CONFIG } from 'src/app/config/const.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (path.trim())
      return path;
    return CONFIG.defaultImage;
  }

}
