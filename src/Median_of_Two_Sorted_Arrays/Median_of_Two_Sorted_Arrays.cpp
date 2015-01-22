#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(int A[], int m, int B[], int n) {

        int* merged = (int*)malloc(sizeof(int)*(m+n));
        int i = 0,j = 0,k = 0;
        double res = 0;

        //两数组合并为排序了的新数组merged
        while(i<m&&j<n){
            if(A[i] < B[j]){
                merged[k] = A[i];
                i++;
            }else if(A[i] > B[j]){
                merged[k] = B[j];
                j++;
            }else{
                merged[k] = A[i];
                i++;
            }
                k++;
        }
        while(i<m){
            merged[k] = A[i];
            i++;
            k++;
        }
        while(j<n){
            merged[k] = B[j];
            j++;
            k++;
        }

        //合并后k个数为总数，
        //当k为奇数，中位数为第(k+1)/2位数的数
        //当k为偶数，中位数为第k/2位数和第(k+2)/2位数的平均数
        if(k%2){
            res = merged[(k+1)/2 - 1];
        }else{
            res = (double)(merged[k/2 - 1]+merged[(k+2)/2 - 1])/2;
        }
        return res;

    }
};
int main() {
//    int m = 4,n = 3;
//    int A[4]={1,2,2,8};
//    int B[3]={3,5,7};
//    //1,2,2,3,5,7,8 => 3

//    int m = 2,n = 1;
//    int A[2]={2,2};
//    int B[1]={7};
//    //2,2,7 => 2

//    int m = 2,n = 2;
//    int A[2]={1,1};
//    int B[2]={1,2};
//    //1,1,1,2 => 1.00000

    int m = 0,n = 2;
    int A[1]={};
    int B[2]={2,3};
    //2,3 => 2.50000

    double res= Solution().findMedianSortedArrays(A,m,B,n);
    cout<<res;
}

