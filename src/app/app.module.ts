import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FamilyService } from './shared/services/family/family.service';
import { IncomeService } from './shared/services/income/income.service';
import { ExpenseService } from './shared/services/expense/expense.service';
import { LifeEventService } from './shared/services/life-event/life-event.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
    FamilyService,
    IncomeService,
    ExpenseService,
    LifeEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
