import pandas as pd

data = pd.read_csv("MPDOGOD2014.CSV", delimiter=";")
unique_values = data['PRVZ_vzrok'].unique()

print(unique_values)