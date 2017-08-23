import { Component, OnInit, ViewChild } from '@angular/core';

import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-income-confirmation',
  templateUrl: './income-confirmation.component.html',
  styleUrls: ['./income-confirmation.component.css']
})
export class IncomeConfirmationComponent implements OnInit {

  /** 収入コンポーネント */
  @ViewChild(IncomeComponent)
  incomeComponent: IncomeComponent;

  /** 支出コンポーネント */
  @ViewChild(ExpenseComponent)
  expenseComponent: ExpenseComponent;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

  /**
   * 貯蓄できる金額を計算します。
   */
  calcSaving(): number {
    return this.incomeComponent.calcTotalAfterTaxIncome() - this.expenseComponent.calcTotalExpenses();
  }
}
