import { Component, OnInit } from '@angular/core';

import { BalanceSheetItem } from '../shared/balance-sheet-item';
import { BalanceSheetService } from '../shared/balance-sheet.service';

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit {

  /** 負債リスト */
  liabilities: BalanceSheetItem[];

  /**
   * コンストラクタ
   */
  constructor(
    private balanceSheetService: BalanceSheetService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
    this.liabilities = [];
    this.getLiabilities();
  }

  /**
   * 負債リストを取得します。
   */
  getLiabilities(): void {
    this.balanceSheetService.getLiabilities().then(liabilities => this.liabilities = liabilities);
  }

  /**
   * 負債合計を計算します。
   */
  calcLiabilityTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.liabilities);
  }
}
