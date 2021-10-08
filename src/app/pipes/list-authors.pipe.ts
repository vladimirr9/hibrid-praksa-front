import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listAuthors'
})
export class ListAuthorsPipe implements PipeTransform {

  transform(authors: any): any {
    if (authors.length === 0) return "Unknown";
    let retVal = "";
    for (let author of authors) {
      retVal += author.firstName + " " + author.lastName + ", "
    }
    return retVal.substring(0, retVal.length - 2);
  }

}
