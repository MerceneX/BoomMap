import pandas as pd

data = pd.read_csv("vsi_podatki.csv", delimiter=",")
unique_values = data['LVVN_vrsta_vozila'].unique()

#data = pd.read_csv("osebe_csv.csv", delimiter=",")
#unique_values = data['LVVN_vrsta_vozila'].unique()


print(unique_values)