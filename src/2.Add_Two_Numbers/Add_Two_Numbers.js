/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var curListNodeHead = null
var addTwoNumbers = function(l1, l2) {
    var curListNode = null
    var carry = 0
    while(l1 || l2){
        var curRes = (l1?l1.val:0) + (l2?l2.val:0) + carry
        var val = curRes % 10
        var carry = Math.trunc(curRes / 10)
        var newListNode = new ListNode(val)
        if(!curListNode) {
            curListNode = newListNode
            curListNodeHead = curListNode
        } else {
            curListNode.next = newListNode
            curListNode = curListNode.next
        }
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
    }
    if(carry){
        curListNode.next = new ListNode(carry)
    }
    return curListNodeHead
}