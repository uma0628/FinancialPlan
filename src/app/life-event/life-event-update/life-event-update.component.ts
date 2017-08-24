import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';

@Component({
  selector: 'app-life-event-update',
  templateUrl: './life-event-update.component.html',
  styleUrls: ['./life-event-update.component.css', '../shared/life-event.css']
})
export class LifeEventUpdateComponent implements OnInit {

  /** 家族リスト */
  @Input()
  family: Human[];

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

  /** ライフイベント更新イベントエミッタ */
  @Output()
  submitLifeEvent = new EventEmitter<LifeEvent>();
  
  /**
   * コンストラクタ
   */
  constructor(
    private lifeEventService: LifeEventService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

  /**
   * ライフイベント更新ボタンイベント
   * @param form 
   */
  public onSubmit(form: NgForm): void {
    this.submitLifeEvent.emit();
    // ライフイベント
    const newEvent: LifeEvent = {
      uuid: form.value.uuid,
      year: form.value.year,
      familyPerson: form.value.familyPerson,
      eventName: form.value.eventName,
      money: form.value.money,
      timestamp: new Date()
    }

    // ライフイベント更新
    this.lifeEventService.update(newEvent);

    // フォームクリア
    // form.reset();
  }
}
