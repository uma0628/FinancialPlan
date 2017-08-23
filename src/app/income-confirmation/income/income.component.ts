import { Component, OnInit } from '@angular/core';

import { IncomeService } from '../../shared/services/income/income.service';
import { Income } from '../../shared/services/income/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  /** 収入リスト */
  private incomes: Income[];

  /**
   * コンストラクタ
   */
  constructor(
    private incomeService: IncomeService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
    this.incomes = this.incomeService.incomes;
  }

  /**
   * 合計収入金額（手取り）を計算します。
   */
  calcTotalAfterTaxIncome() {
    return this.incomeService.totalAfterTaxIncome;
  }
}
