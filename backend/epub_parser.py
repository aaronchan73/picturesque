from html.parser import HTMLParser
import ebooklib
from ebooklib import epub
from pinata_helper import upload_file

WORD_LIMIT = 300
page_to_hash = {}

class HTMLFilter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = ""

    def handle_data(self, data):
        self.text += data

def parse_epub_to_text(file_url):
    fileOut = "epub_text.txt"

    book = epub.read_epub(file_url)
    content = ""

    for item in book.get_items_of_type(ebooklib.ITEM_DOCUMENT):
        bodyContent = item.get_body_content().decode()
        f = HTMLFilter()
        f.feed(bodyContent)
        content += f.text

    with open(fileOut, 'w', encoding='utf-8') as fout:
        fout.write(content)

def parse_epub_to_pages(file_url):
    page_number = 0

    with open(file_url, 'r', encoding='utf-8') as file:
        text = file.read()

    words = text.split()
    pages = []

    while words:
        page_number += 1
        page_words = words[:WORD_LIMIT]
        page = ' '.join(page_words)
        pages.append(page)
        words = words[WORD_LIMIT:]

        page_filename = f"page_{page_number}.txt"
        with open(page_filename, 'w', encoding='utf-8') as page_file:
            page_file.write(page)

        page_hash = upload_file('./' + page_filename)
        page_to_hash[page_number] = page_hash

        if page_number == 5:
            break

    print(page_to_hash)
    return page_to_hash, page_number

if __name__ == '__main__':
    # parse_epub_to_text('./Charlie_and_the_Chocolate_Factory.epub')
    parse_epub_to_pages('./epub_text.txt')