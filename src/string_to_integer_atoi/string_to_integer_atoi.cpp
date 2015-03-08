#include <iostream>
#include <stdio.h>
#define INT_MAX 2147483647
#define INT_MIN (-INT_MAX-1)
using namespace std;
class Solution {
public:
    int atoi(string str) {
        int res = 0;
        int tmp = 0;
        bool isPositive = true;
        int signFlag=0;
        int numFlag=0;
        int spaceFlag=0;
        for(int i=0;i<str.length();i++){
            if(str[i] == ' '){
                if(numFlag){
                    break;
                }
                if(signFlag){
                    return 0;
                }
                spaceFlag=1;
                continue;
            }
            else if(str[i] == '-'||str[i] == '+'){
                if(signFlag){
                    return 0;
                }
                if(str[i]=='-'){
                    isPositive=false;
                }else if(str[i]=='+'){
                    isPositive=true;
                }
                signFlag=1;
            }
            else if(str[i]>='0'&&str[i]<='9'){
                if(numFlag&&spaceFlag){
                    return 0;
                }
                tmp = str[i]-'0';
                if(res>(INT_MAX-tmp)/10&&isPositive){
                    return INT_MAX;
                }else if(-res<(INT_MIN+tmp)/10&&!isPositive){
                    return INT_MIN;
                }else {
                    res=res*10+tmp;
                }
                numFlag=1;
                spaceFlag=0;
            }
            else{
                break;
            }
        }
        if(!isPositive){
            res=-res;
        }
        return res;
    }
};

#define TEST(x) cout<<Solution().atoi(x)<<endl;
int main() {
    TEST("123"); //   123
    TEST("-123"); //  -123
    TEST("+-2"); //  0
    TEST("  -0012a42"); //  -12
    TEST("   +0 123"); //  0
    TEST("2147483648"); //  2147483647
    TEST("-2147483649"); //  -2147483648
    TEST("-2147483647"); //  -2147483647
    TEST("123  456"); //  123
    TEST("    - 321"); //  0
}

