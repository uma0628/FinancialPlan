import { Component, OnInit, Input } from '@angular/core';

import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';

@Component({
  selector: 'app-life-event-list',
  templateUrl: './life-event-list.component.html',
  styleUrls: ['./life-event-list.component.css', '../shared/life-event.css']
})
export class LifeEventListComponent implements OnInit {

  /** 家族リスト */
  @Input()
  family: Human[];

  /** ライフイベントリスト */
  events: LifeEvent[];

  /**
   * コンストラクタ
   */
  constructor(
    private lifeEventService: LifeEventService
  ) { }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.events = this.lifeEventService.list;
  }

}
