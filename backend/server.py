from flask import Flask, jsonify
from flask_cors import CORS
from pinata_helper import get_file
from epub_parser import parse_epub_to_text, parse_epub_to_pages
from samba import retrieveImageUrl
from cover_page_helper import extract_cover_image

app = Flask(__name__)
CORS(app)

page_to_hash = {}

@app.route('/epub/<hash>', methods=['POST'])
def parse_and_upload_epub(hash):
    global page_to_hash
    try:
        get_file(hash)
        book = parse_epub_to_text('./downloaded_file.epub')
        page_to_hash, page_number = parse_epub_to_pages('./epub_text.txt')
        cover_path = extract_cover_image(book)
        return jsonify({'message': 'Successfully parsed and uploaded epub', 'data': page_number, 'image_path': send_from_directory(app.config['UPLOAD_FOLDER'], os.path.basename(cover_path))}), 200
    except:
        return jsonify({'message': 'Failed to parse and upload epub'}), 500

@app.route('/image/<id>', methods=['GET'])
def get_page_text_and_image(id):
    try:
        ipfs_hash = page_to_hash[int(id)]
        get_file(ipfs_hash)
        with open(f'page_{int(id)}.txt', 'r', encoding='utf-8') as file:
            text = file.read()
        url = retrieveImageUrl(text)
        print(url)
        return jsonify({'message': 'Successfully retrieved page text and image', 'data': url}), 200
    except:
        return jsonify({'message': 'Failed to retrieve page text and image'}), 500

if __name__ == '__main__':
    app.run(debug=True)