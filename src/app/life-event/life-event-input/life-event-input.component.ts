import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as UUID from 'uuid';

import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';

@Component({
  selector: 'app-life-event-input',
  templateUrl: './life-event-input.component.html',
  styleUrls: ['./life-event-input.component.css', '../shared/life-event.css']
})
export class LifeEventInputComponent implements OnInit {

  /** 家族リスト */
  @Input()
  family: Human[];

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
   * サブミットイベント
   * @param form 
   */
  onSubmit(form: NgForm): void {
    const newEvent = {
      uuid: UUID.v4(),
      year: form.value.year,
      familyPerson: form.value.familyPerson,
      eventName: form.value.eventName,
      money: form.value.money,
      timestamp: new Date()
    };

    // ライフイベントを追加
    this.lifeEventService.add(newEvent);
    // フォームをクリア
    form.reset();
  }

}
