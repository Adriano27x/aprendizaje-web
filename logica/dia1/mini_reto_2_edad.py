nombre = input("¿Cual es tu nombre?: ")
edad = int(input("¿Cual es tu edad?: "))

if edad >= 18:
    print("Hola " + nombre + ", eres mayor de edad")
elif edad >= 13:
    print("Hola " + nombre + ", eres adolescente")
else: 
    print("Hola " + nombre + ", eres niño")