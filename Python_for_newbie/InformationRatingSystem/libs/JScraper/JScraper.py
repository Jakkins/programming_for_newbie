import importlib, os, hashlib, pathlib
import time, json
import libs.JScraper.Card as Card
import libs.JUtils as JUtils

class Page:
    def __init__(self, main_json):
        self.main_json = main_json
        self.cards = []
        url = self.main_json["url"].encode('utf-8')
        self.hashedUrl = hashlib.sha1(url).hexdigest()
        self.path = os.path.join("dumps", self.hashedUrl)
        if(self.checkTimeFileCreation()): 
            print(f'{main_json["url"]} ---> from file')
            self.__getCardsFromFile()
        else: self.__getCardsFromExternalModule()
           
    def __getCardsFromFile(self):
        F = open(self.path, 'r')
        jsonCardsArr = json.loads(F.read()) # parse json
        F.close()
        for j in jsonCardsArr:
            url = j['url']
            date = j['date']
            title = j['title']
            body = j['body']
            self.cards.append(Card.Card(url, date, title, body))
    
    def __getCardsFromExternalModule(self):
        # EXAMPLE: Inforge.getCards(oneJson['url'], self.soup)
        module = importlib.import_module('libs.JScraper.cards.' + self.main_json['protocol'], package=None)
        if(self.main_json['protocol']=="Twitter"):
            print('Twitter is not supported')
        else:
            # return an array 
            self.cards = module.getCards(self.main_json['url'])
            JUtils.appendToJson(self.path, self.cards)
    
    def printCards(self):
        for card in self.cards:
            card.print()

    def getCards(self):
        return self.cards

    def checkTimeFileCreation(self):
        fname = pathlib.Path(self.path)
        if(fname.exists()):
            created = fname.stat().st_ctime # st_ctime = creation time
            now = time.time()
            diff = now - created
            timer = self.main_json['timer']
            if(int(diff) < int(timer)):
                # do not create a new file
                return True
            else:
                return False
        else:
            # create a new file
            return False
