import requests
import lxml
from bs4 import BeautifulSoup
# not an error, idk why
import libs.JScraper.Card as Card

def getCards(url):
    cards = []
    res_text = requests.get(url).text
    soup = BeautifulSoup(res_text, 'lxml') # parser
    titoli = soup.find_all(['article', 'h2'], class_='post-title')
    date = soup.find_all(['article', 'div', 'span'], class_='meta-date')
    for x in range(len(titoli)-1):
        cards.append(Card.Card(url, date[x].get_text(), titoli[x].get_text(), None))
    return cards