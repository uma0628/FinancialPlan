import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  /** 記号 */
  @Input()
  symbol: string;

  /** 表題 */
  @Input()
  caption: string;

  /** 合計 */
  @Input()
  total: number;

  /** 単位 */
  @Input()
  unit: string;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

}
