from account import Account 

class Driver(Account): 
    def init (self, name, document, 
              email, password): 
           super()._init_(name, 
                          document, email, password)