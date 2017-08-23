import { Injectable } from '@angular/core';

import { Human } from './human';

@Injectable()
export class FamilyService {

  /** 家族リスト */
  family: Human[];

  /**
   * コンストラクタ
   */
  constructor() {
    this.family = [];
  }

  /**
   * 家族情報を追加
   * @param human
   */
  add(human: Human): void {
    this.family.push(human);
  }

  /**
   * 家族情報を更新
   * @param rownum 
   * @param human 
   */
  update(rownum: number, human: Human): void {
    this.family[rownum] = human;
  }

  /**
   * 家族リストを取得
   */
  get list(): Human[] {
    return this.family;
  }
}
