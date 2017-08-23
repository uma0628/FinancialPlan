import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule
  ],
  declarations: [FamilyComponent]
})
export class FamilyModule { }
