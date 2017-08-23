import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule
  ],
  declarations: [FamilyComponent, FamilyDetailComponent, FamilyInputComponent, FamilyListComponent, FamilyUpdateComponent]
})
export class FamilyModule { }
