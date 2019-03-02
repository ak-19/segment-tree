class RangeSum {
  constructor(numbers) {
    this.numbers = numbers;
    const sums = [0];
    for (let i = 0; i < numbers.length; i++) {
        sums[i + 1] = sums[i] + numbers[i];
    }

    this.sums = sums;
  }

  getRange(start = 0, end = this.numbers.length) {
    end = Math.min(end, this.numbers.length);
    return this.sums[end] - this.sums[start];
  }

  changeWithAt(newValue, index) {
    this.numbers[index] = newValue;
    for (let i = index; i < this.numbers.length; i++) {
        this.sums[i + 1] = this.sums[i] + this.numbers[i];
    }
  }
}
 
module.exports = RangeSum;