import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from '../../protected/paginate.pipe';


@NgModule({
  declarations: [],
  imports: [ PaginatePipe ],
  // exports: [PaginatePipe]
})
export class SharedModule { }
