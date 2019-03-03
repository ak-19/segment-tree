const RangeSum = require('./index');

describe('Given test array [1,2,3,4]', () => {
    describe('When input params are 1 and 3', () => {
        test('should return 5', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(1,3)).toBe(5);
        });
    });
    describe('When input params are 2 and 3', () => {
        test('should return 3', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(2,3)).toBe(3);
        });
    });
    describe('When input params are 0 and 4', () => {
        test('should return 10', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(0,4)).toBe(10);
        });
    });
    describe('When input params are 0 and 10', () => {
        test('should return 10', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(0,10)).toBe(10);
        });
    });

    describe('When input param is only end 10', () => {
        test('should return 10', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(undefined, 10)).toBe(10);
        });
    });

    describe('When input param is only start = 1', () => {
        test('should return 9', () => {
            const testArray = [1,2,3,4];
            const rSum = new RangeSum(testArray);
            expect(rSum.getRange(1)).toBe(9);
        });
    });

    describe('When item at index 2 is changed to 11, and get range params is only start = 1', () => {
        test('should return 17', () => {
            const rSum = new RangeSum([1,2,3,4]);
            rSum.changeWithAt(11, 2);
            expect(rSum.getRange(1)).toBe(17);
        });
    });


    describe('When change is made on element outisde the existing range', () => {
        test(`should throw and error with message 'Index is out of existing range'`, () => {
            const rSum = new RangeSum([1,2,3,4]);
            try {
                rSum.changeWithAt(1, 12);
            } catch (error) {
                expect(error.message).toBe('Index is out of existing range');
            }
        });
    });
});