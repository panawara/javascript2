function drawTree(n) {

for ( i = 1; i <= n ; i ++ )
{
    for ( j = 1 ; j <= i ; j ++ )
    {
    document.write("*");
    }
    document.write("<br>");
}
}
document.write("<br>");
drawTree(5)