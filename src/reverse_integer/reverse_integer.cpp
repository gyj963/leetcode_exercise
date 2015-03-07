#include <iostream>
#define INT_MAX 2147483647
#define INT_MIN (-INT_MAX-1)
using namespace std;
class Solution {
public:
    int reverse(int x) {
       int res=0;
       int tmp=0;
       while(x!=0){
        tmp=x%10;
        //  ÅÐÒç³ö
        if(res>INT_MAX/10||res<INT_MIN/10){
            return 0;
        }
        res=res*10+tmp;
        x/=10;
       }
       return res;
    }
};

#define TEST(x) cout<<Solution().reverse(x)<<endl;
int main() {
    TEST(123); //   321
    TEST(-123); //  -321
    TEST(1000000003); //  0
}

