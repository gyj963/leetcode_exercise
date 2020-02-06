#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    string convert(string s, int nRows) {
        vector<string> row(nRows);
        int step = 1;
        int r = 0;
        string res = "";
        if(nRows<=1||nRows>=s.size()){
            return s;
        }
        for(int i=0;i<s.size();i++){
            row[r] += s[i];
            if(r == 0){
                step = 1;
            }else if(r == nRows-1){
                step = -1;
            }
            r+=step;
        }
        for(int j=0;j<nRows;j++){
            res = res+row[j];
        }
        return res;
    }
};
int main() {
    string s = "PAYPALISHIRING";
    string res = Solution().convert(s,3);
    cout<<res;
}

