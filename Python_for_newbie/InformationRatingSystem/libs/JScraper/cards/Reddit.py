import requests
import json
import time
import libs.JScraper.Card as Card

def getCards(url):
    cards = []
    res_json = requests.get(url, headers = {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0'}).json()
    # data > children > 0, 1, 2, 3, ...
    try: 
        arr = res_json["data"]["children"]
        for x in range(len(arr)-1):
            date = arr[x]["data"]["created"]
            # from epoch to datetime
            date = time.strftime('%Y-%m-%d', time.localtime(date))
            title = arr[x]["data"]["title"]
            body = arr[x]["data"]["selftext"]
            cards.append(Card.Card(url, date, title, body))
        return cards
    except Exception as e:
        print(f'ERROR on Reddit module:\n\t{url}\t{e}\n\t{res_json}')
        return []
        
    