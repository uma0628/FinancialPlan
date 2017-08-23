import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship/relationship.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RelationshipPipe],
  exports: [
    RelationshipPipe
  ]
})
export class SharedModule { }
