from car import Car 
from account import Account
from uberx import Uberx 
from user import User

if __name__ == "__main__":
    print("Inicializando las info de los carros")
    print("Car")
    car = Car("AMS256", Account("Andres Herrera", "ASD12365",
    "zabaletakeyly@gmail.com ", "2563"))
    print(vars(car))
    print(vars(car.driver))

    print("Uberx")
    Uberx = Uberx("KLO365", Account("Marco LOis", "SGHJ1236",
    "marco zabaletakeyly@gmail.com", "7856"), "Toyota", "Corolla")
    print(vars(uberX))
    print(vars(uberX.driver))

    print("User") 
    user = User("mariana Valle", "SDFG125F", "zabaletakeyly@gmail.com", 
    "7856") 
    print(vars(user))