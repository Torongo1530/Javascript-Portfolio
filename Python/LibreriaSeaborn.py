#---------------Libreria seaborn---------------

# Seaborn es una librería basada en Matplotlib que se centra en la visualización de datos estadísticos. Permite crear gráficos de datos estáticos de series temporales, entre otras cosas.

# (pip install seaborn)
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt  # Agregada importación de matplotlib

# Generar una matriz aleatoria
matriz = np.random.rand(5, 5)

# Crear mapa de calor
sns.heatmap(matriz, annot=True, cmap='coolwarm')
plt.title('Mapa de Calor')
plt.show()