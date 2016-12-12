function removeSymbols(str) {
	var res = str.replace(".", "");
	res = res.replace(",", "");
	res = res.replace("!", "");
	return res;
}