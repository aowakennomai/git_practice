function add(x, y) {
	return x + y;
}

function sub(x, y) {
	return x - y;
}

/**
 * 回傳 x 乘 y
 * @param x
 * @param y
 * @returns
 */
function multipy(x, y) {
	// 乘法後回傳
	return x * y;
}

/**
 * 回傳平方值
 * @param x
 * @returns
 */
function square(x) {
	return x * x;
}

function fibonacci(x) {
	if (x <= 0)
		return 0;
	if (x <= 2)
		return 1;
	return fibonacci(x - 1) + fibonacci(x - 2);
}

function devide(x, y) {
	// 簡單的 x 除以 y
	return x / y;
}