#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        vector<int> v_res;
        map<int,int> m_num;
        map<int,int>::iterator m_it;
        int index1=-1,index2=-1,tmp=-1;

        v_res.clear();
        m_num.clear();

        //将数组出现过的数字，使用map记录，key为数字，value为key数字所在的数组下标。
        for(int i=0;i<numbers.size();i++){
            m_num.insert(pair<int,int>(numbers[i],i+1));
        }

        for(int j=0;j<numbers.size();j++){

            //查找target-当前数字的值（即加数之一）
            m_it=m_num.find(target-numbers[j]);

            //如果没找到，迭代器将指向map的尾部，继续尝试下个数。
            //找到了即记录当前数下标和target-当前数下标，并停止查找。
            if(m_it==m_num.end()){
                continue;
            }else{
                index1=j+1;
                index2=m_num[target-numbers[j]];
                if(index1==index2){
                    continue;
                }else if(index1>index2){
                    tmp=index1;
                    index1=index2;
                    index2=tmp;
                }
                break;
            }
        }

        v_res.push_back(index1);
        v_res.push_back(index2);
        return v_res;
    }
};
int main() {
    vector<int> numbers;

    //int target=6;
    //numbers.push_back(3);
    //numbers.push_back(2);
    //numbers.push_back(4);

    int target=9;
    numbers.push_back(2);
    numbers.push_back(7);
    numbers.push_back(11);
    numbers.push_back(15);

    vector<int> res= Solution().twoSum(numbers,target);
    cout<<"index1="<<res[0]<<", index2="<<res[1];
}

