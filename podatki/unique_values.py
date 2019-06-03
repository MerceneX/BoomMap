import pandas as pd

data = pd.read_csv('MPDOGOD2014.csv')
unique_values = data['LONO'].unique()

print(unique_values)
