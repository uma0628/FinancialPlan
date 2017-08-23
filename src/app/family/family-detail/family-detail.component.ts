import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {

  /** 氏名 */
  @Input()
  name: string;

  /** 続柄 */
  @Input()
  relationship: string;

  /** 生年月日 */
  @Input()
  birthday: Date;

  /** 行番号 */
  @Input()
  rownum: number;

  /** 選択フラグ */
  myVar: boolean = false;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期化処理
   */
  ngOnInit() {
  }

  /**
   * 家族情報選択イベント
   */
  onClick() {
    this.myVar = true;
  }
}
