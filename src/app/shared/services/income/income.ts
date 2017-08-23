/**
 * 収入クラスです。
 */
export class Income {

	/** 続柄 */
	public relationship: number;

	/** 収入金額 */
	public income: number;

	/** 所得税 */
	public incomeTax: number;

	/** 社会保険料 */
	public insurancePremium: number;

	/** 住民税 */
	public residentTax: number;

	/**
	 * 手取り収入を取得します。
	 */
	get afterTaxIncome(): number {
		return this.income - this.incomeTax - this.insurancePremium - this.residentTax;
	}

	/**
	 * コンストラクタ
	 * @param relationship 
	 * @param income 
	 * @param incomeTax 
	 * @param insurancePremium 
	 * @param residentTax 
	 */
	constructor(relationship, income, incomeTax, insurancePremium, residentTax) {
		this.relationship = relationship;
		this.income = income;
		this.incomeTax = incomeTax;
		this.insurancePremium = insurancePremium;
		this.residentTax = residentTax;
	}
}