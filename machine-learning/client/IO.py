import data_processer as dp,pandas as pd, numpy as nm
def write_to_csv(filename):
    d = read_join_data('MPDOGOD20')
    d.to_csv(filename, encoding='utf-8', index=False)
    #dp.strip_white_spaces(filename)

# reads data and joins,filters it and joins it to a single dataframe
def read_join_data(filename):
    dataframes = []
    year = 14

    for i in range(5):
        path = '../../podatki/' + filename + str(year) + '.CSV'
        dataframes.append(pd.read_csv(path, delimiter=";"))
        year += 1
    joined = pd.concat(dataframes, ignore_index=True, sort=False)
    months, days, weekdays, holidays = dp.split_date(joined['Datum_Nesrece'])
    joined['mesec'] = pd.Series(nm.array(months))
    joined['dan'] = pd.Series(nm.array(days))
    joined['dan_v_tednu'] = pd.Series(nm.array(weekdays))
    joined['je_praznik'] = pd.Series(nm.array(holidays))
    joined['Cas_Nesrece'] = joined['Cas_Nesrece'].round(0)

    # joined2 = joined.loc[joined['PRPV_Povrsje'] != 'SU']
    return joined[['PRPO_poskodbe', 'Datum_Nesrece', 'Cas_Nesrece', 'Naselje_ali_ne', 'PRVZ_vzrok',
                   'PRPV_Tip_Nesrece', 'PRVR_Vreme', 'PRSP_Promet', 'PRSV_vozisce', 'PRPV_Povrsje',
                   'LOVC_vrsta_ceste', 'ime_ceste', 'ulica_odseka', 'stevilka_odseka', 'LVZN_vrsta_avta', 'kraj',
                   'LVVN_vrsta_vozila', 'regija', 'mesec', 'dan', 'dan_v_tednu']]