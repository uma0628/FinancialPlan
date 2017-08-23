import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Human } from '../../shared/services/family/human';
import { FamilyService } from '../../shared/services/family/family.service';
import { Relationship } from '../../shared/services/family/relationship';

@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent implements OnInit {

  /** 家族情報 */
  human: Human;
  /** 続柄 */
  relationships: any;

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
    // 続柄ドロップダウンをセット
    this.relationships = new Relationship().get();
  }

  /**
   * 家族登録ボタンイベント
   * @param form 
   */
  public onSubmit(form: NgForm): void {

    // 家族情報生成
    const human: Human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    // 家族情報を追加
    this.familyService.add(human);

    // フォームクリア
    form.reset();
  }
}
