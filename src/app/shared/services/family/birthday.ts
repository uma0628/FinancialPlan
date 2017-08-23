/**
 * 誕生日関連クラスです。
 */
export class Birthday {
	/** 生年月日 */
	birthday: Date;

	/**
	 * コンストラクタ
	 * @param birthday
	 */
	constructor(birthday: Date) {
		this.birthday = birthday;
	}

	/**
	 * 数え年を返します。
	 * @param year 
	 */
	ageOfYear(year: number = new Date().getFullYear()): number {
		return year - this.birthday.getFullYear();
	}
}