# urllib2 has been split up into urllib.request and urllib.error in Python 3
import urllib
import urllib.request
import base64

USER='USER change this'
API_TOKEN='TOKEN change this'
GIT_API_BASE_URL='https://api.github.com'

def get_api(url_page_path):
    try:
        url_complete = GIT_API_BASE_URL + url_page_path
        req = urllib.request.Request(url_complete)
        s = '%s/token:%s' % (USER, API_TOKEN)
        s_clean = s.encode()
        base64string = base64.encodebytes(s_clean)
        req.add_header("Authorization", "Basic %s" % base64string.decode())
        res = urllib.request.urlopen(req)
        charset = res.info().get_content_charset()
        content = res.read().decode(charset)
        print(content)
        res.close()
    except Exception as e:
        print(e)

get_api('/user/repos')