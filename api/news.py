from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
url = 'https://www.businesstoday.in/markets/company-stock'
req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})

webpage = urlopen(req).read()
page_soup = soup(webpage, "html.parser")

count = 1
items ={}

containers = page_soup.findAll("div", "boxcont")
for container in containers:
    
    
    try:

        items[count] = {"ctitle":container.get("ctitle"),"url":container.get("url"), "img":container.findAll("img")[0]. get("src"),"brief":container.findAll("p")[0].get_text() }
        count +=1

    except:
        print("bruh")



for i,c in items.items():
    print(c)    
    
    