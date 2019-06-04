import requests, data_processer as dp
import json
import pandas as pd
import json
import csv
import datetime
import codecs
from pandas.io.json import json_normalize
from efficient_apriori import apriori
import numpy as nm
import holidays as h


# testing purposes
def test(data):
    data_to_observe = data[['stevilka_odseka', 'regija']]
    #data_to_observe = data_to_observe.loc[data['PRVR_Vreme']!='J']
    data_to_observe.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(dp.data_generator('clean_data.csv'), min_support=0.2, min_confidence=0.3)
    print('o')
    return itemsets, rules


# data to send
def post_data(data):
    sections, sections_numbers, town = dp.get_road_data(data)
    itemsets, rules = create_rules()
    url = ''
    jsonData = {
        'critical_sections': sections,
        'critical_sections_number': sections_numbers,
        'common-sets': itemsets,
        'town': town,
        'legend': {
            '0': 'poskodbe',
            '1': 'datum',
            '2': 'cas',
            '3': 'naselje/zunaj_naselja',
            '4': 'vzrok',
            '5': 'tip_nesrece',
            '6': 'vreme',
            '7': 'promet',
            '8': 'vozisce',
            '9': 'povrsje',
            '10': 'vrsta_ceste',
            '11': 'ime_ceste',
            '12': 'ulica_odseka',
            '13': 'stevilka_odseka',
            '14': 'vrsta_avta',
            '15': 'kraj',
            '16': 'vrsta_vozila',
            '17': 'regija',
            '18': 'mesec',
            '19': 'dan_v_tednu'

        }
    }
    print(jsonData)
    # requests.post(url,)
    return 0


# use of apriori algorithm
def create_rules():
    joined = read_join_data()
    joined.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(dp.data_generator('clean_data.csv'), min_support=0.2, min_confidence=0.5)

    return itemsets, rules


# reads data and joins,filters it and joins it to a single dataframe
def read_join_data():
    dataframes = []
    year = 14
    codes = pd.read_csv('../../podatki/MPSIFR.CSV', delimiter=";")
    car_type_codes = codes.loc[codes['besedna_sifra'] == 'LVZN']

    for i in range(5):
        path = '../../podatki/MPDOGOD20' + str(year) + '.CSV'
        dataframes.append(pd.read_csv(path, delimiter=";"))
        year += 1
    joined = pd.concat(dataframes, ignore_index=True, sort=False)
    months, days, weekdays, holidays = dp.split_date(joined['Datum_Nesrece'])
    joined['mesec'] = pd.Series(nm.array(months))
    joined['dan'] = pd.Series(nm.array(days))
    joined['dan_v_tednu'] = pd.Series(nm.array(weekdays))
    joined['je_praznik'] = pd.Series(nm.array(holidays))
    joined2 = joined.loc[joined['PRPV_Povrsje']!='SU']

    return joined2[['PRPO_poskodbe', 'Datum_Nesrece', 'Cas_Nesrece', 'Naselje_ali_ne', 'PRVZ_vzrok',
                   'PRPV_Tip_Nesrece', 'PRVR_Vreme', 'PRSP_Promet', 'PRSV_vozisce', 'PRPV_Povrsje',
                   'LOVC_vrsta_ceste', 'ime_ceste', 'ulica_odseka', 'stevilka_odseka', 'LVZN_vrsta_avta', 'kraj',
                   'LVVN_vrsta_vozila', 'regija', 'mesec', 'dan', 'dan_v_tednu']]


test(read_join_data())
itemsets, rules = create_rules()
print(rules)
