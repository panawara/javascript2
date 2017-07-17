function star() {
	return "*";
}
function drawTree(n) {
	for( i = 1 ; i <= n ; i ++ ) {
		for( j = n - 1 ; j >= i ; j-- ); 
			document.write("&nbsp;");
		for( j = 1 ; j <= ( 2 * i - 1 ) ; j++ ) 
			document.write(star());
			document.write("<br/>");
	}
}
verse = parseInt(prompt("Podaj ilość wierszy:"));
drawTree(verse);