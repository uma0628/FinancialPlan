import { Component, OnInit, ViewChild } from '@angular/core';

import { BalanceSheetService } from './shared/balance-sheet.service';
import { AssetComponent } from './asset/asset.component';
import {LiabilityComponent } from './liability/liability.component';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {

  /** 資産ビュー */
  @ViewChild(AssetComponent)
  assetComponent: AssetComponent;

  /** 負債ビュー */
  @ViewChild(LiabilityComponent)
  liabilityComponent: LiabilityComponent

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
   * 純資産を計算します。
   */
  calcStockholderEquity(): number {
    return this.assetComponent.calcAssetTotal() - this.liabilityComponent.calcLiabilityTotal();
  }

}
