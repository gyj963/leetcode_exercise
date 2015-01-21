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

        //��������ֹ������֣�ʹ��map��¼��keyΪ���֣�valueΪkey�������ڵ������±ꡣ
        for(int i=0;i<numbers.size();i++){
            m_num.insert(pair<int,int>(numbers[i],i+1));
        }

        for(int j=0;j<numbers.size();j++){

            //����target-��ǰ���ֵ�ֵ��������֮һ��
            m_it=m_num.find(target-numbers[j]);

            //���û�ҵ�����������ָ��map��β�������������¸�����
            //�ҵ��˼���¼��ǰ���±��target-��ǰ���±꣬��ֹͣ���ҡ�
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

