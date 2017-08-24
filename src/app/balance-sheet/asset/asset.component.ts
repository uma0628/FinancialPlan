import { Component, OnInit } from '@angular/core';

import { BalanceSheetItem } from '../shared/balance-sheet-item';
import { BalanceSheetService } from '../shared/balance-sheet.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  /** 資産リスト */
  assets: BalanceSheetItem[];

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
    this.assets = [];
    this.getAssets();
  }

  /**
   * 資産リストを取得します。
   */
  getAssets(): void {
    this.balanceSheetService.getAssets().then(assets => this.assets = assets);
  }

  /**
   * 資産合計を計算します。
   */
  calcAssetTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.assets);
  }
}
