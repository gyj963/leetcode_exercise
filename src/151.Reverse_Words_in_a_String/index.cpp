#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    void reverseWords(string &s) {
        vector<string> v_str;
        string tmp_str = "";
        string res_str = "";

        v_str.clear();
        for(int i=0; i<=s.length(); i++){
            if(i == s.length() || s[i] == ' '){
                if(tmp_str.length()==0){
                    continue;
                }else{
                    v_str.push_back(tmp_str);
                    tmp_str="";
                }
            }
            else{
                tmp_str+=s[i];
            }
        }

        if(v_str.size() == 0){
            s = "";
            return;
        }
        for(int j=v_str.size()-1; j>0; j--){
            res_str = res_str+v_str[j]+" ";
        }

        res_str += v_str[0];
        s = res_str;
    }
};
int main() {
//    string input = "";
    string input = " the sky is blue ";
    
    Solution().reverseWords(input);
    cout<<input;
}

