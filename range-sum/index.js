class RangeSum {
  constructor(numbers) {
    this.numbers = numbers;
    this.rangeTree = [];
    this.constructRangeTree(numbers, 0, 0, numbers.length - 1);
  }

  constructRangeTree(numbers, treeIndex, start, end){
    if (start === end) {
      this.rangeTree[treeIndex] = numbers[start];
    } else {
      const midIndex = this.findMiddleOfRange(start, end);
      const {firstChildIndex, secondChildIndex} = this.getChildrenIndex(treeIndex);
      this.rangeTree[treeIndex] = 
        this.constructRangeTree(numbers, firstChildIndex, start, midIndex) 
        + this.constructRangeTree(numbers, secondChildIndex, midIndex + 1 , end);
    }
  
    return this.rangeTree[treeIndex];  
  }

  getChildrenIndex(index){
    return {
      firstChildIndex: index * 2 + 1,
      secondChildIndex: index * 2 + 2
    }
  }

  findMiddleOfRange(start, end){
    return start + Math.floor((end - start) / 2);
  }

  
  getRange(start = 0, end = this.numbers.length) {
    end = Math.min(end, this.numbers.length);

    return this.getRangFromRangeTree(start, end, 0, this.numbers.length - 1, 0);
  }

  getRangFromRangeTree(start, end, leftRangeTree, rightRangeTree, treeIndex){
    if (this.completlyOutOfRange(start, end, leftRangeTree , rightRangeTree)) {
      return 0;
    } else if(this.withinTheRange(start, end, leftRangeTree, rightRangeTree)){
      return this.rangeTree[treeIndex];
    } else {
      const {firstChildIndex, secondChildIndex} = this.getChildrenIndex(treeIndex);
      const midIndex = this.findMiddleOfRange(leftRangeTree, rightRangeTree);
      return this.getRangFromRangeTree(start, end, leftRangeTree, midIndex, firstChildIndex)
      + this.getRangFromRangeTree(start, end, midIndex + 1, rightRangeTree, secondChildIndex);
    }
  }

  withinTheRange(start, end, l , r){
    return r <= end && l >= start;
  }

  completlyOutOfRange(start, end, l , r){
    return r < start || l > end;
  }

  changeWithAt(newValue, index) {
    if (index < 0 || index >= this.numbers.length) {
      throw new Error('Index is out of existing range');
    }

    const diff = newValue - this.numbers[index];

    this.addDiffToTree(index, diff, 0, 0, this.numbers.length - 1);
  }

  addDiffToTree(changeAtIndex, diff, treeIndex, rangeStart, rangeEnd){
    if (changeAtIndex <= rangeEnd && changeAtIndex >= rangeStart) { 
      this.rangeTree[treeIndex] += diff;
      if (this.ifNotLeafNode(rangeStart, rangeEnd)) {        
        const midRange = this.findMiddleOfRange(rangeStart, rangeEnd);
        const { firstChildIndex , secondChildIndex } = this.getChildrenIndex(treeIndex);
        this.addDiffToTree(changeAtIndex, diff, firstChildIndex, rangeStart, midRange);     
        this.addDiffToTree(changeAtIndex, diff, secondChildIndex, midRange + 1, rangeEnd);     
      }
    }
  }

  ifNotLeafNode(rangeStart, rangeEnd){
    return rangeStart !== rangeEnd;
  }
}
 
module.exports = RangeSum;