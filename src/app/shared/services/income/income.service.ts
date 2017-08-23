import { Injectable } from '@angular/core';

import { Income } from './income';

@Injectable()
export class IncomeService {

  /** 収入リスト */
  incomes: Array<Income> = new Array<Income>();

  /**
   * コンストラクタ
   */
  constructor() {
    this.incomes.push(new Income(0, 0, 0, 0, 0));
    this.incomes.push(new Income(1, 0, 0, 0, 0));
  }

  /**
   * 年間合計収入（手取り）を取得します。
   */
  get totalAfterTaxIncome(): number {
    let sum: number = 0;
    this.incomes.forEach(element => {
      sum += element.afterTaxIncome;
    });
    return sum;
  }

}
