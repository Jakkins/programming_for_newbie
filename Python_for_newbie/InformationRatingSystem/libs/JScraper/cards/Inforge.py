import requests
import lxml
from bs4 import BeautifulSoup
# not an error, idk why
import libs.JScraper.Card as Card

def getCards(url):
    cards = []
    response = requests.get(url).text
    return []

# TODO test inforge page html with soup
# ------------------
# ------ TEST ------
"""
import requests
import lxml
from bs4 import BeautifulSoup
# url, data, titolo, corpo
text = open('inforge.txt', 'r').read()
soup = BeautifulSoup(text, 'lxml') # parser

# div root --- > structItemContainer-group js-threadList
#   div item ---> structItem structItem--thread is-prefix30 js-inlineModContainer js-threadListItem-596214
#       div containing title --- > structItem-cell structItem-cell--main
#           div ulteriore ---> structItem-title
#               a con ID: js-XFUniqueId10 ---> SONO TUTTI DIVERSI
titoli = soup.find_all(['article', 'h2'], class_='post-title')
date = soup.find_all(['article', 'div', 'span'], class_='meta-date')
"""