import pandas as pd

data = pd.read_csv("MPDOGOD2014.CSV", delimiter=";")
unique_values = data['PRVR_Vreme'].unique()

print(unique_values)