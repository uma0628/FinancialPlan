import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  /** タイトル */
  @Input()
  title: string;

  /** 概要 */
  @Input()
  desc: string;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

}
