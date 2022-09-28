import bank_account


class User:
    def __init__(self, name, age, email):
        self.name = name
        self.email = email
        self.age = age
        self.account = bank_account.BankAccount(int_rate=0.05, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        # print(self.account.balance)
        return self

    def make_withdrawal(self, amount):
        if (self.account - amount) > 0:
            self.account -= amount
        return self

    def display_info(self):
        print(f"name: {self.name}")
        print(f"email: {self.email}")
        print(f"age: {self.age}")
        self.account.display_account_info()
        return self

    # def display_user_balance(self):
    #     return self


my_user = User("Daniel", "djhoenicke@gmail.com", 28)
my_user.display_info().make_deposit(300).display_info()
