---
path: "/web-scraping-with-selenium-and-headless-chrome"
date: "2017-06-25"
title: "Web Scraping with Selenium and Headless Chrome"
tags: ["python", "selenium", "web scraping"]
---

Modern and popular websites can detect when a bot, as opposed to an actual human is requesting content. To prevent data extraction these websites will sometimes render the page differently. However if you were to render the page programmatically with an actual browser, there would be no way to detect the bot, that’s where Selenium shines.

With Selenium, you can render the exact same pages you see normally because it uses a real browser. The advantage is that you can prototype web scrapers much faster since you can view exactly what the bot sees. And with the headless browser option in Chrome 59+, you can use Selenium without having to open an actual Chrome window on your desktop. Your bot can scrape quietly in the background.

To use a headless chrome requires a bit of configuration. The following setup was done with macOS El Capitan (v10.11.6).

First you will need the chrome web driver and the latest version of chrome canary. Homebrew is perfect for installing binary files.

```
brew install chromedriver
brew install Caskroom/versions/google-chrome-canary
```

Check the Applications folder and you will see the Chrome Canary browser. Next, we need to install selenium with python bindings. If you don’t have pip installed you can follow these instructions.

```
$ sudo pip install selenium
```

Let’s write a simple web scraper for reddit. Create a new file called reddit.py, open the file with your favorite text editor and paste the following code.

```
# reddit.py
from selenium import webdriver
options = webdriver.ChromeOptions()
options.binary_location = '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
options.add_argument('window-size=800x841')
options.add_argument('headless')
driver = webdriver.Chrome(chrome_options=options)
driver.get('https://reddit.com')
topLinks = driver.find_elements_by_xpath("//div/p/a[contains(@class, 'title')]")
for link in topLinks:
  print 'Title: ', link.text
driver.quit()
```

For the binary path location you might be tempted to escape the spaces in the string. However doing so will give an incorrect location to selenium.

Now open a terminal session in the directory where your file is found and run the following command.
```
$ python reddit.py
```

At this point you should see the top 25 front page links printed in the console. Below are some additional links I found useful through the configuration process. Happy web scraping!