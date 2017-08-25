import { Component, OnInit } from '@angular/core';

import { FamilyService } from '../../shared/services/family/family.service';
import { Human } from '../../shared/services/family/human';
import { IncomeService } from '../../shared/services/income/income.service';
import { ExpenseService } from '../../shared/services/expense/expense.service';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';
import { LifeEvent } from '../../shared/services/life-event/life-event';

@Component({
  selector: 'app-flow-table',
  templateUrl: './flow-table.component.html',
  styleUrls: ['./flow-table.component.css']
})
export class FlowTableComponent implements OnInit {

  /** 列数 */
  private readonly COLS = 21;

  /** ページリスト */
  private pages = [];

  /** 現在ページインデックス */
  pageIndex = 0;

  /**
   * コンストラクタ
   */
  constructor(
    private familyService: FamilyService,
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
    private lifeEventService: LifeEventService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

  /**
   * 年次リストを取得します。
   */
  get years(): number[] {

    // 総ページ数が0でない（既に初期化されてる）
    // 場合は何もしない。
    if (this.pages.length !== 0) {
      return this.pages[this.pageIndex];
    }

    const _cur = new Date().getFullYear();
    let _array = [];
    // 現在年から列幅分まで年を加算
    for (let _i = 1 ; _i < this.COLS ; _i++) {
      if (_i === 0) {
        _array.push(_cur);
      } else {
        _array.push(_cur + _i);
      }
    }

    const len = _array.length;
    // １ページの最大表示件数
    const count = 5;
    // Math.ceil()⇒剰余計算
    for (let i = 0 ; i < Math.ceil(len / count) ; i++) {
      const j = i * count;
      const p = _array.slice(j, j + count);
      this.pages.push(p);
    }

    return this.pages[this.pageIndex];
  }

  /**
   * 家族リストを取得します。
   */
  get family(): Human[] {
    return this.familyService.list;
  }

  /**
   * 夫を取得します。
   */
  get husband(): Human {
    return this.familyService.list.filter(p => {
      if (p.relationship === '0') {
        return p;
      }
    })[0];
  }

  /**
   * 妻を取得します。
   */
  get wife(): Human {
    return this.familyService.list.filter(p => {
      if (p.relationship === '1') {
        return p;
      }
    })[0];
  }

  /**
   * 子どもたちを取得します。
   */
  get children(): Human[] {
    return this.familyService.list.filter(p => {
      if (p.relationship === '2') {
        return p;
      }
    });
  }

  /**
   * 誕生日から数え年を取得します。
   * @param birthday 
   * @param year 
   */
  ageOfYear(birthday: Date, year: number = new Date().getFullYear()): number {
    return year - birthday.getFullYear();
  }

  /**
   * 夫の収入を取得します。
   */
  get husbandIncome(): number {
    return this.income(0);
  }

  /**
   * 妻の収入を取得します。
   */
  get wifeIncome(): number {
    return this.income(1);
  }

  /**
   * 夫または妻の収入を取得します。
   */
  income(relationship: number): number {
    return this.incomeService.incomes.filter(p => {
      if (p.relationship === relationship) {
        return p;
      }
    })[0].afterTaxIncome;
  }

  /**
   * 夫婦の合計収入を取得します。
   */
  get coupleTotalIncome(): number {
    return this.incomeService.totalAfterTaxIncome;
  }

  /**
   * 支出サービスクラスを取得します。
   */
  get expenses(): ExpenseService {
    return this.expenseService;
  }

  /**
   * その年のライフイベントを取得します。
   * @param _year 
   */
  lifeEvents(_year: number): LifeEvent[] {
    let lifeEvent :Array<LifeEvent> = new Array<LifeEvent>();
    this.lifeEventService.list.forEach(e => {
      if (e.year === _year) {
        lifeEvent.push(e);
      }
    });
    return lifeEvent;
  }

  /**
   * その年の合計一時支出を取得します。
   * @param _year 
   */
  totalSuddenlyExpense(lifeEvents: LifeEvent[]): number {
    let sum: number = 0;
    lifeEvents.forEach(e => {
      sum += e.money;
    });
    return sum;
  }

  /**
   * その年のイベント名を取得します。
   * @param lifeEvents 
   */
  eventNames(lifeEvents: LifeEvent[]): string {
    let str: string = null;
    lifeEvents.forEach(e => {
      if (str === null) {
        str = e.eventName;
      } else {
        str  += ', ' + e.eventName;
      }
    });
    return str;
  }

  /**
   * 合計支出を取得します。
   * @param evtExpense 
   */
  totalExpense(evtExpense?: number): number {
    if (evtExpense == null) {
      return this.expenseService.totalExpenses;
    }
    return this.expenseService.totalExpenses + evtExpense;
  }

  /**
   * 合計収支を取得します。
   * @param eventExpense 
   */
  totalBalance(eventExpense?: number): number {
    return this.coupleTotalIncome - this.totalExpense(eventExpense);
  }

  /**
   * 年間支出額を計算します。
   * @param monthly 
   * @param suddenly 
   */
  calcYearlyExpense(monthly: number, suddenly: number): number {
    return (monthly * 12) + suddenly;
  }

  /**
   * 前のページに戻るイベント
   */
  prevPage() {
    if (this.pageIndex === 0) {
      return;
    }
    this.pageIndex--;
  }

  /**
   * 次のページに進むイベント
   */
  nextPage() {
    if (this.pageIndex === this.pages.length - 1) {
      return;
    }
    this.pageIndex++;
  }

  /**
   * 年次のオフセット文字列を取得します。
   * @param _year 
   * @param number 
   */
  getYearOffset(_year: number): string {
    const _cur = new Date().getFullYear();
    const offset = _year - _cur;

    if (offset === 0) {
      return '現在';
    }

    return offset + '年';
  }
}
