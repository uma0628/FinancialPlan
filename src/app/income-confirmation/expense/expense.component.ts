import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../../shared/services/expense/expense.service';
import { Expense } from '../../shared/services/expense/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

// 支出リスト
private expenses: Expense[];

  /**
   * コンストラクタ
   */
  constructor(
    private expenseService: ExpenseService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
    this.expenses = this.expenseService.expenses;
  }

  /**
   * 年間合計支出を計算します。
   */
  calcTotalExpenses(): number {
    return this.expenseService.totalExpenses;
  }
}
