import urllib.request

def main():
    img_url = "https://pngtree.com/freepng/pixel-art-viking-warrior-with-axe-and-shield_23278181.html"
    urllib.request.urlretrieve(img_url, "viking.png")

if __name__ == "__main__":
    main()
