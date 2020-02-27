#	zigzag conversion


### 题意：
字符串"PAYPALISHIRING"被写成给定行数的之字型的结果是这样的：
<table>
<tr>
<td>P</td>
<td>&nbsp;</td>
<td>A</td>
<td>&nbsp;</td>
<td>H</td>
<td>&nbsp;</td>
<td>N</td>
</tr>
<tr>
<td>A</td>
<td>P</td>
<td>L</td>
<td>S</td>
<td>I</td>
<td>I</td>
<td>G</td>
</tr>
<tr>
<td>Y</td>
<td></td>
<td>I</td>
<td></td>
<td>R</td>
</tr>
</table>
思路：

如果仍是上例，行数改成4，其之字型排列应该是：
<table>
<tr>
<td>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>I</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>N</td>
</tr>
<tr>
<td>A</td>
<td>&nbsp;</td>
<td>L</td>
<td>S</td>
<td>&nbsp;</td>
<td>I</td>
<td>G</td>
</tr>
<tr>
<td>Y</td>
<td>A</td>
<td>&nbsp;</td>
<td>H</td>
<td>R</td>
</tr>
<tr>
<td>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>I</td>
</tr>
</table>
或者画成这样更容易观察：
<table>
<tr>
<td>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>I</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>N</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>A</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>L</td>
<td>&nbsp;</td>
<td>S</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>I</td>
<td>&nbsp;</td>
<td>G</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>Y</td>
<td>&nbsp;</td>
<td>A</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>H</td>
<td>&nbsp;</td>
<td>R</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>I</td>
</tr>
</table>
这时输出应该为："PINALSIGYAHRPI"

可以观察到结果为，按照上面排列，按照行排列，顺序输出。

例：

输入：

convert("PAYPALISHIRING", 3) 

输出：

"PAHNAPLSIIGYIR"

### 题目：
<a href="https://leetcode.com/problems/zigzag-conversion/" target="_blank">点这里</a>

### 代码：
<a href="./zigzag_conversion.cpp">点这里</a>
