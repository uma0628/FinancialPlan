import { Injectable } from '@angular/core';

import { Expense } from './expense';

@Injectable()
export class ExpenseService {

  // 支出リスト
  expenses: Array<Expense> = new Array<Expense>();

  /**
   * コンストラクタ
   */
  constructor() {
    this.expenses.push(new Expense(1, '基本生活費', '食費、水道光熱費、通信費、日用雑貨費など', 0, 0));
    this.expenses.push(new Expense(2, '住居関連費', '住宅ローン、管理費、積立金、固定資産税など', 0, 0));
    this.expenses.push(new Expense(3, '車両費', '駐車場代、ガソリン代、自動車税など', 0, 0));
    this.expenses.push(new Expense(4, '教育費', '学校教育費、塾代、習い事の費用など', 0, 0));
    this.expenses.push(new Expense(5, '保険料', '家族全員の保険料', 0, 0));
    this.expenses.push(new Expense(6, 'その他の支出', 'レジャー費、交際費、冠婚葬祭費など', 0, 0));
  }

  /**
   * 合計支出を取得します。
   */
  get totalExpenses(): number {
    let sum: number = 0;
    this.expenses.forEach(element => {
      sum += element.yearly;
    });
    return sum;
  }

}
