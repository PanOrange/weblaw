import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseLayoutComponent } from "../components/base-layout/base-layout.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [BaseLayoutComponent]
})
export class SharedModule { }
