import pandas as pd

data = pd.read_csv("MPDOGOD2014.CSV", delimiter=";")
unique_values = data['PRPO'].unique()

print(unique_values)