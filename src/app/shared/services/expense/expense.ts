/**
 * 支出クラスです。
 */
export class Expense {

	/** 支出項目ID */
	public key: number;

	/** 支出項目名 */
	public name: string;

	/** 内容 */
	public desc: string;

	/** 毎月の支出 */
	public monthly: number;

	/** 年に数回の支出 */
	public suddenly: number;

	/**
	 * 年間支出を取得します。
	 */
	get yearly(): number {
		return (this.monthly * 12) + this.suddenly;
	}

	/**
	 * コンストラクタ
	 * @param key 
	 * @param name 
	 * @param monthly 
	 * @param suddenly 
	 */
	constructor(key, name, desc, monthly, suddenly) {
		this.key = key;
		this.name = name;
		this.desc = desc;
		this.monthly = monthly;
		this.suddenly = suddenly;
	}
}