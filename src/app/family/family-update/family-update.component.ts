import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Human } from '../../shared/services/family/human';
import { FamilyService } from '../../shared/services/family/family.service';
import { Relationship } from '../../shared/services/family/relationship';

@Component({
  selector: 'app-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  /** 家族情報 */
  human: Human;

  /** 続柄情報 */
  relationships: any;

  /** 行番号 */
  @Input()
  rownum: number;

  /** 氏名 */
  @Input()
  name: string;

  /** 続柄 */
  @Input()
  relationship: string;

  /** 生年月日 */
  @Input()
  birthday: Date;

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
    this.relationships = new Relationship().get();
  }

  /**
   * 家族情報更新ボタンイベント
   * @param form 
   */
  public onSubmit(form: NgForm): void {

    // 家族情報
    const human: Human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    }

    // 家族情報更新
    this.familyService.update(this.rownum, human);

    // フォームクリア
    form.reset();
  }

  /**
   * 生年月日をフォーマットして返します。
   */
  get birthdayFormat() {
    return this.birthday.toISOString().substring(0, 10);
  }
}
