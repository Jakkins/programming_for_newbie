# trim 
# hash

import hashlib

class Card:

    def __init__(self, url, data, title, body):
        try: self.url = url.strip()
        except Exception: self.url = None
        
        try: self.data = data.strip()
        except Exception: self.data = None

        try: self.title = title.strip()
        except Exception: self.title = None

        try: self.body = body.strip()
        except Exception: self.body = None
        
    def print(self):
        output = ''
        if self.body is None:  output = f'{self.data}\n{self.title}\n'
        else: output = f'{self.data}\n{self.title}\n{self.body}\n'
        print(output)