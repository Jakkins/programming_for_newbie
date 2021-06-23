import json

# introspection like a lazy
def pdir(obj):
    print(dir(obj))

def appendInFile(path, cards):
    # also creates the file if does not exists
    f = open(path, 'a')
    for c in cards:
        # print(c)
        f.write(c.toString())
    f.close()

def appendToJson(path, cards):
    json_cards = []
    for c in cards: json_cards.append(c.toJson())
    f = open(path, 'w', encoding='utf-8')
    json.dump(json_cards, f, ensure_ascii=False, indent=4)
    f.close()