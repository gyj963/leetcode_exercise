### 我的思路
####    解法一
数组中每个数字都应该在以该数为下标+1的位置，如果当前下标+1!==当前下标+1上的数字，则说明当前下标+1这个数字是缺失的

例如：
假设数组为[3,4,-1,1]
下标+1    1 2  3 4
挪动数组中的数字，让其在下标为当前数字+1的位置上，（交换当前下标对应的数字和下标为当前数字+1的数字）直到需要挪动的数字不在当前数组范围。

数字移动轨迹 
下标+1：1   [-1,4,3,1]
下标+1：2   [-1,1,3,4]
下标+1：2   [1,-1,3,4]
下标+1：3   [1,-1,3,4]
下标+1：4   [1,-1,3,4]

对比下标+1及对应数字，不一样则该下标+1为缺失数字，返回该数

数组处理后 [1,-1,3,4]
下标+1     1, 2 3 4

所以2为最小缺失正数


####    解法二
暴力看代码就知道我咋想的了