import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "paginate",
  pure: false,
  standalone: true
})
export class PaginatePipe implements PipeTransform {
  transform<T>(
    items: T[],
    currentPage: number,
    itemsPerPage: number
  ): T[] {
    if (!items || itemsPerPage <= 0 || currentPage < 1) {
      return [];
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }
}
