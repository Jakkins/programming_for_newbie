import requests
import lxml
from bs4 import BeautifulSoup
import libs.JScraper.Card as Card

# TODO autodetect if Reddit, or Twitter, or json

def getCards(url, soup):
    print(soup)
    print(url)
    return []