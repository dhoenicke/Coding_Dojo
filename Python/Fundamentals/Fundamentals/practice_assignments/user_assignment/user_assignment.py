class User:

    def __init__(self, first_name, last_name, email, age,):

        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("==========================")
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("==========================")
        return self

    def enroll(self):
        self.is_rewards_member = True
        return self
        
    def spend_points(self, amount):
        self.gold_card_points
        return self

    def deposit(self, amount):
        self.deposit += amount
        return self

    def withdraw(self, amount):
        if (self.deposit - amount) > 0:
            self.deposit -= amount
        return self

    def display_user_balance(self):
        print("self.account")
        return self

my_user = User("Daniel", "Hoenicke", "djhoenicke@gmail", 28)
my_user.display_info().enroll().spend_points(50).display_info().enroll().spend_points(80).display_info()

