nombre = input("¿Cual es tu nombre?: ")
edad = int(input("¿Cual es tu edad?: "))
nota = int(input("Ingresa tu nota: "))

if edad < 0 or edad > 100:
    print("Edad invalida")
elif nota < 0 or nota > 20:
    print("Nota invalida")
else:
    if nota >= 17:
        print(nombre + ", excelente")
    elif nota >= 11:
        print(nombre + ", aprobado")
    else:
        print(nombre + ", desaprobado")