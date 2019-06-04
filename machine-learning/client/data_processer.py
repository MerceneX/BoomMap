import codecs, json, requests, pandas as pd, numpy as nm, holidays as h,datetime
from pandas.io.json import json_normalize

# from url
def get_data():
    url = 'http://localhost:5000/api/data/nesrece'
    response = requests.get(url, stream=True)

    json_data = json.loads(response.text)
    goodData = json_data['features']
    jD = json_normalize(goodData)
    jsonD = pd.DataFrame.from_dict(jD, orient='columns')
    return jsonD


def add_legend(splittedLine):
    for i in range(len(splittedLine)):
        key = str(i) + ":"
        splittedLine[i] = key + splittedLine[i]

    return splittedLine


def data_generator(filename):
    def data_gen():
        with codecs.open(filename, encoding="UTF8", errors='replace') as csvfile:
            for line in csvfile:
                splitted = line.split(',')
                add_legend(splitted)
                yield tuple(k.strip() for k in splitted)

    return data_gen

#gets data out of date
def split_date(column):
    slo_holidays = h.Slovenia()
    date_values = column.values
    months = []
    days = []
    weekdays = []
    holidays = []

    for value in date_values:
        d = datetime.datetime.strptime(value, "%d.%m.%Y")
        months.append(str(d.month))
        days.append(str(d.day) + 'd')
        weekdays.append(str(d.weekday()) + 'w')
        holidays.append(value in slo_holidays)
    return months, days, weekdays, holidays

#statistic
def get_road_data(data):
    df = pd.DataFrame(data)
    sections = df['ulica_odseka'].value_counts()
    sections_json = json.loads(sections.to_json())

    sections_number = df['stevilka_odseka'].value_counts()
    sections_number_json = json.loads(sections_number.to_json())

    town = df['kraj'].value_counts()
    town_json = json.loads(town.to_json())

    return sections_json, sections_number_json, town_json