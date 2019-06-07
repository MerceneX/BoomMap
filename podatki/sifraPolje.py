import csv
import pandas

csv = pandas.read_csv("makeJSArray.csv", sep=";", encoding="utf-8")
    
valuesArray,decoderArray = list(), list()

for i in range(len(csv["SIFRA"])):
    valuesArray.append(csv["SIFRA"][i])
    decoderArray.append(csv["VREDNOST"][i])

print(valuesArray)
print(decoderArray)