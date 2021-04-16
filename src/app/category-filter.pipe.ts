import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(sites: any[], category: any): any {
    return category==='Toutes'? sites : sites.filter(site=> site.type===category);
  }

}