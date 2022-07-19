from math import inf

class MinSegementTree:
    def __init__(self, A):
        self.N = len(A)
        self.A = [0] * self.N + A
        for i in range(self.N-1, -1, -1):
            self.A[i] = min(self.A[i * 2], self.A[i * 2 + 1])

    def update(self, index, val):
        index += self.N
        self.A[index] = val
        index //= 2
        while index > 1:
            self.A[index] = min(self.A[index], val)
            index //= 2
            
    def min(self, L, R):
        L += self.N
        R += self.N

        result = inf

        while L <= R:
            if L % 2 == 1:
                result = min(result, self.A[L])
                L += 1
            if R % 2 == 0:
                result = min(result, self.A[R])
                R -= 1                

            L //= 2
            R //= 2


        return result


    