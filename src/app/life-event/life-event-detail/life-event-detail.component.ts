import { Component, OnInit, Input } from '@angular/core';

import { Human } from '../../shared/services/family/human';
import { Birthday } from '../../shared/services/family/birthday';
import { LifeEvent } from '../../shared/services/life-event/life-event';

@Component({
  selector: 'app-life-event-detail',
  templateUrl: './life-event-detail.component.html',
  styleUrls: ['./life-event-detail.component.css', '../shared/life-event.css']
})
export class LifeEventDetailComponent implements OnInit {
  
  /** UUID */
  @Input()
  uuid: string;

  /** 年次 */
  @Input()
  year: number;
  
  /** 家族情報 */
  @Input()
  familyPerson: Human;
  
  /** イベント名 */
  @Input()
  eventName: string;
  
  /** かかるお金 */
  @Input()
  money: number;
  
  /** タイムスタンプ */
  @Input()
	timestamp: Date;

  /** 家族リスト */
  @Input()
  family: Human[];

  /** 選択フラグ */
  myVar: boolean = false;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期処理
   */
  ngOnInit() {
    // console.log(this.event);
  }

  /**
   * 数え年を取得します。
   * @param human 
   */
  ageOfYear(year: Date): number {
    let birthday: Birthday = new Birthday(year);
    return birthday.ageOfYear();
  }

  /**
   * ライフイベント選択イベント
   */
  onClick() {
    this.myVar = true;
  }

  /**
   * ライフイベント更新イベント
   */
  onLifeEventChange() {
    this.myVar = false;
  }
}
