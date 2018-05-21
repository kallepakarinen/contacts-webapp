import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#43A047';
  colors = {
    'a': '#F0F4C3',
    'b': '#F0F4C3',
    'c': '#E6EE9C',
    'd': '#E6EE9C',
    'e': '#DCE775',
    'f': '#DCE775',
    'g': '#D4E157',
    'h': '#D4E157',
    'i': '#CDDC39',
    'j': '#CDDC39',
    'k': '#C0CA33',
    'l': '#C0CA33',
    'm': '#AFB42B',
    'n': '#AFB42B',
    'o': '#9E9D24',
    'p': '#9E9D24',
    'q': '#827717',
    'r': '#827717',
    's': '#827717',
    't': '#F4FF81',
    'u': '#F4FF81',
    'v': '#F4FF81'
  };

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }

}
