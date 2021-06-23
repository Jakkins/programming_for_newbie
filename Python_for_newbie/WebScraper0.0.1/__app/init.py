import os, subprocess
import json
import Scraper

# TODO caricare le pagine in modo asincrono
# TODO timer

def jsonLoader():
    pathdir = os.path.dirname(__file__)
    F = open(os.path.join(pathdir, "links.json"), "r")
    return json.loads(F.read())

pages = []
for json in jsonLoader():
    pages.append(Scraper.Page(json))

for page in pages:
    page.printCards()


