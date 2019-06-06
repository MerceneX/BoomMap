import pandas as pd

data = pd.read_csv("vsi_podatki.csv", delimiter=",")
unique_values = data['dan_v_tednu'].unique()

print(unique_values)