import importlib
import requests
import lxml
from bs4 import BeautifulSoup
import Card

# receive a json with
# - url
# - timer
# - rules_module_name

class Page:

    def __init__(self, json):
        self.timer = json['timer']
        response = requests.get(json['url']).text
        self.soup = BeautifulSoup(response, 'lxml') # parser
        self.page_cards = importlib.import_module('cards.'+json['rules_module_name'], package=None).getCards(json['url'], self.soup)
       
    def printCards(self):
        for card in self.page_cards:
            card.print()
