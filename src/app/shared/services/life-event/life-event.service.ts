import { Injectable } from '@angular/core';

import { LifeEvent } from './life-event';

@Injectable()
export class LifeEventService {

  /** ライフイベントリスト */
  events: LifeEvent[];

  /**
   * コンストラクタ
   */
  constructor() {
    this.events = [];
  }

  /**
   * ライフイベントを追加します。
   * @param event 
   */
  add(event: LifeEvent): void {
    this.events.push(event);
    this.events.sort((e1, e2) => e1.year - e2.year);
  }

  /**
   * ライフイベントを更新します。
   * @param event 
   */
  update(event: LifeEvent): void {
    let index: number;
    this.events.some((e, i, a) => {
      index = a.indexOf(e);
      return e.uuid === event.uuid;
    });

    // 数値の0はfalse！
    if (index == null) {} else {
      this.events[index] = event;
    }

    this.events.sort((e1, e2) => e1.year - e2.year);
  }

  /**
   * ライフイベントリストを取得します。
   */
  get list(): LifeEvent[] {
    return this.events;
  }
}
