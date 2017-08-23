import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifeEventComponent } from './life-event/life-event.component';
import { IncomeConfirmationComponent } from './income-confirmation/income-confirmation.component';
import { FamilyComponent } from './family/family.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LifeEventComponent,
    IncomeConfirmationComponent,
    FamilyComponent,
    CashFlowComponent,
    BalanceSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
