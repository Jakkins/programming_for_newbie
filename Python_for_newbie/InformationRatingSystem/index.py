import os
import libs.JUtils as JUtils
import libs.module as M

pathdir = os.path.dirname(__file__)

# ------ GET FEED ------
M.getFeedFromArrOFJson(os.path.join(pathdir, "jsons", "cybersec.json"))
cards = M.getCards()
for c in cards:
    print(c.toString())

# visualizziamo a schermo
# poi facciamo l'IRE

    
