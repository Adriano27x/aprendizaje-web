nombre = input("¿Cual es tu nombre?: ")
edad = int(input("¿Cual es tu edad?: "))

if edad < 0 or edad > 100:
    print(nombre + ", edad invalida")
else:
    if edad >= 18:
        print(nombre + ", acceso permitido")
    else:
        print(nombre + ", acceso denegado")