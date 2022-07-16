from rangesum import SegmentTree
import unittest

class TestSum(unittest.TestCase):

    def test_sum_01(self):
        st = SegmentTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.sum(1, 3), 9, "Should be 9")

    def test_sum_02(self):
        st = SegmentTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.sum(1, 4), 4, "Should be 4")        

if __name__ == '__main__':
    unittest.main()