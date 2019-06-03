import requests
import json
import pandas as pd
import json
import csv
import codecs
from pandas.io.json import json_normalize
from efficient_apriori import apriori
import collections


def add_legend(splittedLine):
    key = ""
    for i in range(len(splittedLine)):
        key = str(i) + ":"
        splittedLine[i] = key + splittedLine[i]

    return splittedLine


def get_columns(filename):
    csvData = pd.read_csv(filename)
    col = ""
    for column in csvData.columns:
        col = col + column + ","
    return col[:-1]


def data_generator2(filename):
    def data_gen():
        with codecs.open(filename, encoding="UTF8", errors='replace') as csvfile:
            for line in csvfile:
                splitted = line.split(',')
                add_legend(splitted)
                yield tuple(k.strip() for k in splitted)

    return data_gen


def get_data():
    url = 'http://localhost:5000/api/data/nesrece'
    response = requests.get(url, stream=True)

    json_data = json.loads(response.text)
    goodData = json_data['features']
    jD = json_normalize(goodData)
    jsonD = pd.DataFrame.from_dict(jD, orient='columns')
    return jsonD


def connect_day_hour_section(data):
    data_to_observe = data[['dan', 'promet']]
    data_to_observe.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(data_generator2('clean_data.csv'), min_support=0.1, min_confidence=0.2)

    return itemsets, rules


def get_road_data(data):
    df = pd.DataFrame(data)
    column = df['odsek']
    sections = df['odsek'].value_counts()
    sections_json = json.loads(sections.to_json())

    road = df['cesta'].value_counts()
    road_json = json.loads(road.to_json())

    return sections_json, road_json


def post_data(data):
    sections, road = get_road_data(data)
    itemsets,rules = create_rules('data.csv')
    url = ''
    jsonData = {
        'critical_sections': sections,
        'road': road,
        'common-sets': itemsets
    }
    print(jsonData)
    # requests.post(url,)
    return 0


def create_rules(filename):
    file = clear_data(csvData, ['dc', 'lovc', 'stac', 'osebe', 'key', 'FID', 'ishs', 'priority', 'nas', 'the_geom'])
    file = pd.DataFrame(file)
    file.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(data_generator2('clean_data.csv'), min_support=0.2, min_confidence=1)

    return itemsets, rules


def clear_data(data, columns_to_delete):
    newdata = csvData.drop(columns_to_delete, axis=1)
    return newdata


csvData = pd.read_csv('data.csv')

post_data(csvData)
filename = 'data.csv'
itemsets, rules = create_rules('data.csv')
print(rules)

ri, r = connect_day_hour_section(csvData)

print(r)
