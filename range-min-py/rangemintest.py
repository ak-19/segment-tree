from rangemin import MinSegementTree
import unittest

class TestSum(unittest.TestCase):

    def test_min_01(self):
        st = MinSegementTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.min(1, 3), 2, "Should be 2")

    def test_min_02(self):
        st = MinSegementTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.min(1, 4), 2, "Should be 2")        

    def test_min_03(self):
        st = MinSegementTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.min(0, 4), 1, "Should be 1")                

    def test_min_with_update(self):
        st = MinSegementTree([1, 2, 3, 4, 5, 6, 7])
        self.assertEqual(st.min(1, 4), 2, "Should be 2")                
        st.update(4, 1)
        self.assertEqual(st.min(1, 4), 1, "Should be 1")                


if __name__ == '__main__':
    unittest.main()