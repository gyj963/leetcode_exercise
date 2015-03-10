#include <iostream>
#define INT_MAX 2147483647
#define INT_MIN (-INT_MAX-1)
using namespace std;
class Solution {
private:
    int reverse(int x) {
       int res=0;
       int tmp=0;
       while(x!=0){
        tmp=x%10;
        if(res>INT_MAX/10||res<INT_MIN/10){
            return 0;
        }
        res=res*10+tmp;
        x/=10;
       }
       return res;
    }
public:
    bool isPalindrome(int x) {
        if(x>=0&&x==reverse(x)){
            return true;
        }else{
            return false;
        }
    }
};

#define TEST(x) cout<<Solution().isPalindrome(x)<<endl;
int main() {
    TEST(123);
    TEST(12321);
    TEST(-1);
}

