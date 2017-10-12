import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'favorite' })
export class FavoritePipe implements PipeTransform {
  
  transform(contacts: any[], isFavorite?: true) {
    return contacts.filter(contact => contact.isFavorite == isFavorite);
  }
}
