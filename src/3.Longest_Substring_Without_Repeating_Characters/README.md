#	Longest Substring Without Repeating Characters
---

### 题意：
给一个字符串，查找无重复字符的最长子串的长度。例如，字符串"abcabcbb"中最长且无重复字符的子串为"abc"，长度为3。对于字符串"bbbbb"，该子串为"b",其长度为1。


例：

输入：

"abcabcbb"

输出：

3

输入：

""

输出：

0

###	思路
dp+hash优化。

对于当前字符，如果它与前面的最长不重复子串中的字符没有重复，那么就可以以它为结尾构成新的最长子串；如果有重复，且重复位置在最长子串起始位置之后，就以该重复位置后一个字符为起始位置与当前字符构成新的子串。

举个例子，"abcdeab"第二个字符a之前的最长不重复子串是"abcde"，a与最长子串中的字符有重复，但是它与稍短的"bcde"串没有重复，于是它可以与其构成新的子串，之前的最长子串"abcde"结束。

所以，如果遇到重复字符，新的子串长度是与第一个重复字符的下标有关的，如果该下标在上一个最长子串起始位置之前（即与上个最长子串字符无重复字符），则dp[i]=dp[i-1]+1（dp数组存的是i位置最长子串长度），即此时上一个最长子串的起始位置也是当前最长子串的起始位置；如果该重复字符下标在最长子串起始位置之后，则新的子串是从该下标后一位开始的。

进一步优化，我们用hash记录元素是否出现过，记录字符出现过的下标，这样就不必回头查找字符是否出现过。而时间复杂度也从O(N^2)降低到O(N)。不过要借助空间，以空间换时间。

进一步优化，之前的dp最优子问题解的更新方程：dp[i]=dp[i-1]+1;这里的dp[i]其实就是更新最优解之后的结果，不需要O(n)的辅助空间去存，只需要O(1)的空间来存最优解就可以了。此时时间复杂度O(N)，辅助空间为O(1)。



### 题目：
<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank">点这里</a>

### 代码：
<a href="./Longest_Substring_Without_Repeating_Characters.cpp">点这里</a>