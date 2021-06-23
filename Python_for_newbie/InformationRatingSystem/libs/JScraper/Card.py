# trim 
# hash

import hashlib

class Card:

    def __init__(self, url, date, title, body):
        try: self.url = url.strip()
        except Exception: self.url = None
        
        try: self.date = date.strip()
        except Exception: self.date = None

        try: self.title = title.strip()
        except Exception: self.title = None

        try: self.body = body.strip()
        except Exception: self.body = None
        
    def print(self):
        output = ''
        if self.body is None:  output = f'{self.date}\n{self.title}\n'
        else: output = f'{self.date}\n{self.title}\n{self.body}\n'
        print(output)
    
    def toString(self):
        output = ''
        if self.body is None:  output = f'{self.date}\n{self.title}\n'
        else: output = f'{self.date}\n{self.title}\n{self.body}\n'
        return output
    
    def toJson(self):
        return {
            "url": self.url,
            "title": self.title,
            "body": self.body,
            "date": self.date
        }
