class BankAccount:

    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if (self.balance - amount) > 0:
            self.balance -= amount
        else:
            print(f"Insufficient funds: Charging a $5 fee")
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        print(f"Interest Rate: {self.int_rate}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
            return self


user1 = BankAccount(.2, 100)
user2 = BankAccount(0.5, 150)


user1.deposit(100).deposit(100).deposit(100).withdraw(200).yield_interest().display_account_info()
user2.deposit(150).deposit(100).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()
