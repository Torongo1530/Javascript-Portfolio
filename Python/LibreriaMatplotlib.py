#--------------Libreria matplotlib---------------

# Matplotlib es una librería estándar y conocida que permite generar una gran variedad de gráficos de calidad sin requerir muchas líneas de código.

# (pip install matplotlib)
import matplotlib.pyplot as plt

# Datos de ejemplo
x = [0, 1, 2, 3, 4, 5]
y = [0, 1, 4, 9, 16, 25]

# Crear gráfica de líneas
plt.plot(x, y, marker='o', linestyle='-', color='b', label='x^2')
plt.title('Gráfica de líneas: y = x^2')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()