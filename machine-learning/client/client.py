import requests, data_processer as dp, json, csv,IO
import pandas as pd
from efficient_apriori import apriori
import numpy as nm

pd.set_option('precision', 0)
# testing purposes
dnevi_v_tednu = {
    '0': 'ponedeljek',
    '1': 'torek',
    '2': 'sreda',
    '3': 'cetrtek',
    '4': 'petek',
    '5': 'sobota',
    '6': 'nedelja'
}


def test(data):
    data_to_observe = data[['dan_v_tednu', 'Cas_Nesrece']]
    # data_to_observe = data_to_observe.loc[data['PRVR_Vreme']!='J']
    data_to_observe.to_csv("test_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(dp.data_generator('test_data.csv'), min_support=0.1, min_confidence=0.1)
    return itemsets, rules


def save_output(data, itemsets):
    common_itemsets = list()
    for i in range(len(itemsets)):
        common_itemsets.append(list(itemsets[i + 1].keys()))
    sections, sections_numbers, town, region, time = dp.get_road_data(data)
    json_data = {
        'critical_sections': sections,
        'critical_sections_number': sections_numbers,
        'itemsets': common_itemsets,
        'town': town,
        'region': region,
        'time': time,
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
    with open('output.json', 'w') as outfile:
        json.dump(json_data, outfile)

filename = 'data.csv'
# use of apriori algorithm
def create_rules():
    itemsets, rules = apriori(dp.data_generator(filename), min_support=0.2, min_confidence=0.5)
    return itemsets, rules

def refresh_data_to_send():
    itemsets, rules = create_rules()
    save_output(pd.read_csv(filename), itemsets)

def main():
    #refresh_data_to_send()
    sections = pd.read_csv('odseki.csv')



if __name__ == "__main__":
    main()

