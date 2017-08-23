import { Component, OnInit } from '@angular/core';

import { Human } from '../../shared/services/family/human';

import { FamilyService } from '../../shared/services/family/family.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  /** 家族情報リスト */
  family: Human[];

  /**
   * コンストラクタ
   */
  constructor(
    private familyService: FamilyService
  ) { }

  /**
   * 初期化処理
   */
  ngOnInit() {
    this.family = this.familyService.list;
  }
}
