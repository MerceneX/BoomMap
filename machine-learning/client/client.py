import requests, data_processer as dp, json,csv
import pandas as pd
from efficient_apriori import apriori
import numpy as nm


# testing purposes
def test(data):
    data_to_observe = data[['stevilka_odseka', 'regija']]
    # data_to_observe = data_to_observe.loc[data['PRVR_Vreme']!='J']
    data_to_observe.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(dp.data_generator('clean_data.csv'), min_support=0.2, min_confidence=0.3)
    print('o')
    return itemsets, rules


# data to send
def post_data():
    with open('output.json') as json_file:
        data = json.load(json_file)

    url = ''

    # requests.post(url,)
    return 0


def save_output(data, itemsets):
    common_itemsets = list()
    for i in range(len(itemsets)):
        common_itemsets.append(list(itemsets[i + 1].keys()))
    sections, sections_numbers, town, region = dp.get_road_data(data)
    json_data = {
        'critical_sections': sections,
        'critical_sections_number': sections_numbers,
        'itemsets': common_itemsets,
        'town': town,
        'region': region,
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


# use of apriori algorithm
def create_rules(data,path):
    joined = read_join_data()
    joined.to_csv("clean_data.csv", encoding='utf-8', index=False)
    itemsets, rules = apriori(dp.data_generator('clean_data.csv'), min_support=0.2, min_confidence=0.5)

    return itemsets, rules


# reads data and joins,filters it and joins it to a single dataframe
def read_join_data(filename):
    dataframes = []
    year = 14

    for i in range(5):
        path = '../../podatki/'+filename + str(year) + '.CSV'
        dataframes.append(pd.read_csv(path, delimiter=";"))
        year += 1
    joined = pd.concat(dataframes, ignore_index=True, sort=False)
    '''
    months, days, weekdays, holidays = dp.split_date(joined['Datum_Nesrece'])
    joined['mesec'] = pd.Series(nm.array(months))
    joined['dan'] = pd.Series(nm.array(days))
    joined['dan_v_tednu'] = pd.Series(nm.array(weekdays))
    joined['je_praznik'] = pd.Series(nm.array(holidays))
    '''
    #joined2 = joined.loc[joined['PRPV_Povrsje'] != 'SU']
    '''
    return joined[['PRPO_poskodbe', 'Datum_Nesrece', 'Cas_Nesrece', 'Naselje_ali_ne', 'PRVZ_vzrok',
                    'PRPV_Tip_Nesrece', 'PRVR_Vreme', 'PRSP_Promet', 'PRSV_vozisce', 'PRPV_Povrsje',
                    'LOVC_vrsta_ceste', 'ime_ceste', 'ulica_odseka', 'stevilka_odseka', 'LVZN_vrsta_avta', 'kraj',
                    'LVVN_vrsta_vozila', 'regija', 'mesec', 'dan', 'dan_v_tednu']]
    '''
    return joined

def refresh_data_to_send():
    path ='../../podatki/vsi_podatki.csv'
    data = pd.read_csv(path)
    #itemsets, rules = apriori(dp.data_generator(path), min_support=0.2, min_confidence=0.5)
    itemsets,rules = create_rules(data,path)
    list_of_keys = list(itemsets[1].keys())
    save_output(data, itemsets)


def main():
    #dp.strip_white_spaces('clean_data.csv')
    #refresh_data_to_send()
    '''
    data = read_join_data('MPOSEBE20')
    data.to_csv("temp.csv", encoding='utf-8', index=False)
    dp.strip_white_spaces('temp.csv')
    '''
    data  = pd.read_csv('temp.csv')
    data.to_csv('../../podatki/osebe_csv.csv',encoding='utf-8', index=False)



if __name__ == "__main__":
    main()
