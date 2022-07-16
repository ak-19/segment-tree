class SegmentTree:
    def __init__(self, A):
        self.N = len(A)
        self.A = [0] * 2 * self.N
        for i in range(self.N, self.N * 2):
            self.A[i] = A[i - self.N]
        for i in range(self.N - 1, -1, -1):
            self.A[i] = self.A[i * 2] + self.A[i * 2 + 1]

    def update(self, index, val):
        index += self.N
        self.A[index] = val
        while index > 0:
            L = R = index
            if index % 2 == 1: L -= 1
            else: R += 1
            self.A[index // 2] = self.A[L] + self.A[R]
            index //= 2

    def sum(self, l, r):        
        result = 0
        if 0 <= l < self.N and 0 <= r < self.N:
            L = l + self.N
            R = r + self.N
            
            while L <= R:
                if L % 2 == 1:
                    result += self.A[L]
                    L += 1
                if R % 2 == 0:
                    result += self.A[R]
                    R -= 1            

                L //= 2
                R //= 2


        return result