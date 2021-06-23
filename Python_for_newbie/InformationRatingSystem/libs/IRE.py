from JUtils import *
import re

print("Information Rating Engine (IRE): STARTED")
class IRE:
    """docstring for IRE."""

    def __init__(self):
        super(IRE, self).__init__()
        self.cards = ["empty"]

    def getCards(self):
        return self.cards

    def createCards(self, text):
        pass


"""
text = open("text.txt", "r").read()
IRE = IRE()
IRE.createCards(text)
print(IRE.getCards())
"""
