# Disclaimer: Scraping Twitter is against their Terms of Service, 
# so if you decide to do this you do it at your own risk

import requests
import lxml
from bs4 import BeautifulSoup
import libs.JScraper.Card as Card

def getCards(url):
    response = requests.get(url).text
    soup = BeautifulSoup(response, 'lxml') # parser
    # print(soup)
    # print(url)
    return []