import bank_account


class User:
    def __init__(self, name, age, email, account):
        self.name = name
        self.email = email
        self.age = age
        self.account = bank_account.BankAccount(int_rate=0.05, balance=0)
    
    def make_deposit(self, amount):
        self.account.deposit(100)
        print(self.account.balance)
        return self

    def display_info(self):
        print(f"name: {self.name}")
        print(f"email: {self.email}")
        print(f"age: {self.age}")
        print(f"account: {self.account}")
        return self

    def withdraw(self, amount):
        if (self.account - amount) > 0:
            self.account -= amount
        return self

    def display_user_balance(self):
        print("self.account")
        return self

my_user = User("Daniel", "Hoenicke", "djhoenicke@gmail", 28)
my_user.display_user_balance()