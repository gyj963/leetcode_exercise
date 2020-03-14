#include <iostream>
#include <map>
using namespace std;
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        map<char,int> visit;
        map<char,int>::iterator v_it;
        visit.clear();
        visit[s[0]]=0;
        int curlen=1,maxlen=0,last_begin=0;
        int size=s.length();
        if(size==0){
            maxlen=0;
        }else if(size==1){
            maxlen=1;
        }else{
            for(int i = 1;i < size;i++){
                v_it=visit.find(s[i]);
                if(v_it==visit.end()){
                   curlen++;
                   visit[s[i]]=i;
                }else{
                    if(visit[s[i]]>=last_begin){
                        last_begin=visit[s[i]]+1;
                        curlen=i-visit[s[i]];
                        visit[s[i]]=i;
                    }else{
                        curlen++;
                        visit[s[i]]=i;
                    }
                }
                if(curlen>maxlen){
                    maxlen=curlen;
                }
            }
        }

        return maxlen;
    }
};
int main() {
    string s = "abcabcbb";
    //3
//    string s = "bbbbb";
//    //1
//    string s = "c";
//    //1
//    string s = "aa";
//    //1
//    string s = "";
//    //0
//    string s = "au";
//    //2
    int res = Solution().lengthOfLongestSubstring(s);
    cout<<res;
}

