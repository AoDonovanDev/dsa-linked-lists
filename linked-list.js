/** Node: node for a singly linked list. */
/* ran the tests with jasmine standalone, wasnt sure how to make it work as given */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    val = new Node(val)
    if(!this.head){
      this.head = val;
      this.tail = val;
    }
    this.tail.next = val;
    this.tail = val;
    val.next = null
    this.length +=1;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    val = new Node(val)
    if(!this.head){
      this.head = val;
      this.tail = val;
    }
    val.next = this.head;
    this.head = val;
    this.length +=1;
    return undefined
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.tail){
      return 'you cant do that'
    }
    let val = this.head
    if(this.length === 1){
      console.log(this.length, this)
      let rmv = val.val
      this.tail = null
      this.head = null
      this.length -=1
      return rmv
    }
    while(val.next != null){
      this.tail = val;
      val = val.next;
    }
    val.next = null;
    this.length -=1;
    return val.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return 'you cant do that'
    }
    if(this.length === 1){
      let rmv = this.head
      this.head = null;
      this.tail = null;
      this.length -=1
      return rmv.val
    }
    let rmv = this.head;
    this.head = this.head.next;
    this.length -=1
    return rmv.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let val = this.head
    for(let i = 0; i < idx; i++){
      val = val.next
    }
    return val.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let p = this.head
    for(let i = 0; i < idx; i++){
      p = p.next
    }
    p.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val)
    let p = this.head
    if(idx === this.length){
      this.tail = newNode;
    }
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length +=1;
      return undefined;
    }
    for(let i = 1; i < idx; i++){
      p = p.next
    }
    let nextVal = p.next;
    p.next = newNode;
    newNode.next = nextVal;
    this.length +=1;
    console.log(this)
    return undefined
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let val = this.head
    if(this.length === 1){
      let rmv = this.head.val
      this.head = null;
      this.tail = null;
      this.length -=1;
      return rmv
    }
    for(let i = 0; i < idx; i++){
      val = val.next;
    }
    let rmv = val.next
    nextVal = rmv.next
    val.next = nextVal;
    return rmv;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0
    }
    let p = this.head;
    let a = 0;
    while(p){
      a += p.val;
      p = p.next;
    }
    return a/this.length
  }
}
/* 
module.exports = LinkedList; */