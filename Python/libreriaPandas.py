#-------------Libreria pandas--------------

# Pandas es una librería en Python que se especializa en el manejo, análisis y procesamiento de datos. Para ello, se basa en las estructuras de datos o arrays de la librería NumPy (por lo que representa una dependencia al momento de instalar Pandas).
# Siendo tres las estructuras que tenemos disponibles en esta librería: Series, DataFrame y Panel.

#Primero debo instalar pandas en cmd (pip install pandas)
import pandas as pd

# Crear un DataFrame
data = {'Nombre': ['Angel', 'Isaac', 'Mirian'], 'Edad': [25, 2, 22]}
df = pd.DataFrame(data)

# Mostrar el DataFrame
print(df)

# Calcular la edad promedio
edad_promedio = df['Edad'].mean()
Mayores_edad = df[df['Edad']>18]
print(f"\nEdad promedio: {edad_promedio}\n")
print(f"""Mayores de edad:

{Mayores_edad}""")