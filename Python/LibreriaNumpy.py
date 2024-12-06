#------------Libreria numpy--------------

# NumPy es una librería de Python especializada en el cálculo numérico y el análisis de datos, especialmente para un gran volumen de datos. Incorpora una nueva clase de objetos llamados arrays que permite representar colecciones de datos de un mismo tipo en varias dimensiones, y funciones muy eficientes para su manipulación.
# La ventaja de Numpy frente a las listas predefinidas en Python es que el procesamiento de los arrays se realiza mucho más rápido (hasta 50 veces más) que las listas, lo cual la hace ideal para el procesamiento de vectores y matrices de grandes dimensiones.

import numpy as np

# Sumar 5 a cada elemento del arreglo
listaNumeros = np.array([1, 2, 3, 4, 5])
resultado = listaNumeros + 5
print(resultado)

# Generar numero entero aleatorio del 1 al 10
numeroAleatorio = np.random.randint(1, 10)
print(f"Numero aleatorio: {numeroAleatorio}")