import { NgModule } from '@angular/core';
import { PaginatePipe } from '../../patient/paginate.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [ PaginatePipe, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, FormsModule ],
  // exports: [PaginatePipe]
})
export class SharedModule { }
