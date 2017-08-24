import { Component, OnInit } from '@angular/core';

import { Human } from '../shared/services/family/human';
import { FamilyService } from '../shared/services/family/family.service';

@Component({
  selector: 'app-life-event',
  templateUrl: './life-event.component.html',
  styleUrls: ['./life-event.component.css', './shared/life-event.css']
})
export class LifeEventComponent implements OnInit {

  /** 家族リスト */
  family: Human[]

  /**
   * コンストラクタ
   */
  constructor(
    private familyService: FamilyService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
    this.family = this.familyService.list;
  }

  /**
   * 家族リストが空かどうか
   */
  isEmptyFamily(): boolean {
    return this.family.length === 0;
  }

}
