import { Injectable } from '@angular/core';

import { BalanceSheetItem } from './balance-sheet-item';
import { ASSETS } from './mock-assets';
import { LIABILITIES } from './mock-liabilities';

/**
 * 収支バランスシートサービスクラス
 */
@Injectable()
export class BalanceSheetService {

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 資産を取得します。
   */
  getAssets(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(ASSETS);
  }

  /**
   * 負債を取得します。
   */
  getLiabilities(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(LIABILITIES);
  }

  /**
   * 金額の合計を取得します。
   * @param items 
   */
  getMoneyTotal(items): number {
    let sum = 0;
    items.forEach(items => {
      sum += isNaN(items.money) ? 0 : Number(items.money);
    });

    return sum;
  }

}
