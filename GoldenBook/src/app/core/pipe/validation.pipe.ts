import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'validation',
  pure: false,
})
export class ValidationPipe implements PipeTransform {
  transform(formControl: FormControl, error: string): unknown {
    return formControl.dirty && formControl.errors?.[error];
  }
}
