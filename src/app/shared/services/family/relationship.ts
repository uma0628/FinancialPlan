/**
 * 続柄クラスです。
 */
export class Relationship {
	/** 続柄 */
	private keyValue = [
		{key: 0, value: '夫'},
		{key: 1, value: '妻'},
		{key: 2, value: '子'},
		{key: 9, value: '親'}
	];

	/**
	 * 続柄を取得
	 */
	get () {
		return this.keyValue;
	}

	/**
	 * キーから続柄を取得します。
	 * @param key
	 */
	value (key: number): string {
		return this.keyValue.filter(
			(value, index) => (value.key === Number(key)) ? this.keyValue[index]: ''
		)[0].value;
	}
}