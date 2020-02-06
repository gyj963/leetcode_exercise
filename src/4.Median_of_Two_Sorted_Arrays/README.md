#	Median of Two Sorted Arrays
---

###	题意：
给两个有序数组A和B，大小分别为m、n。找出这两个有序数组的中位数。整体运行时间复杂度应为O(log（m+n）)。

###	思路：
中位数（百度百科）：
中值也称中位数，即数据按升序或者降序排列，假如有n个数据，当n为偶数时，中位数为第n/2位数和第(n+2)/2位数的平均数；如果n为奇数，那么中位数为第（n+1）/2位数的值。

合并两个有序数组为一个有序数组。找到中位数输出...

例：

输入： 

[1,1]，[1,2],2,2;

输出：

1.00000

输入： 

[]，[2,3],0,2;

输出：

2.50000


###	题目：
<a href="https://leetcode.com/problems/median-of-two-sorted-arrays/" target="_blank">点这里</a>

### 代码：
<a href="./Median_of_Two_Sorted_Arrays.cpp">点这里</a>