nota = int(input("Ingresa tu nota: "))

if nota < 0 or nota > 20:
    print("Nota invalida")
else:
    if nota >= 17:
        print("Excelente")
    elif nota >= 11:
        print("Aprobado")

    else:
        print("Desaprobado")