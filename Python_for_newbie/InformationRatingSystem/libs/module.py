import json
import libs.JScraper.JScraper as JScraper

pages = []

def getFeedFromJson(pathJson):
    F = open(pathJson, "r")
    oneJson = json.loads(F.read())
    pages.append(JScraper.Page(oneJson))

def getFeedFromArrOFJson(pathJson):
    F = open(pathJson, "r")
    jsonArr = json.loads(F.read()) # parse json
    for j in jsonArr:
        pages.append(JScraper.Page(j)) # start scraper

# ------ GET ------

def getPages():
    return pages

def getCards():
    # ogni pagina torna un array di carte
    
    # listone = [1,2,3]
    # listtwo = [4,5,6]
    # joinedlist = listone + listtwo
    
    cards = []
    for p in pages:
        cards = cards + p.getCards()
    return cards

# ------ PRINT ------

def printPages():
    print(pages)

def printCards():
    for page in pages:
        page.printCards()