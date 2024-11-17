import os
import ebooklib
from ebooklib import epub
from flask import Flask, jsonify, send_from_directory
from io import BytesIO

app = Flask(__name__)

# Path to store the extracted cover image temporarily
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def extract_cover_image(file_url):
    """
    Extracts the cover image from the EPUB and saves it as cover.png or cover.jpg
    Returns the path to the saved image file.
    """
    book = epub.read_epub("./downloaded_file.epub")
    
    # Look for 'cover.png' or 'cover.jpg'
    print("ONSDS")
    image_paths = []
    def extract_cover_image(book):
        """
        Extracts the cover image from the EPUB and saves it as cover.png or cover.jpg.
        Returns a list of the paths to the saved image files.
        """        
        image_paths = []
        for item in book.get_items():
            if item.get_type() == ebooklib.ITEM_IMAGE:
                image_data = item.content  # The raw image data
                image_name = item.get_name()
                
                # Get the directory part of the image path (e.g., 'OPS/')
                image_dir = os.path.dirname(image_name)
                image_filename = os.path.basename(image_name)

                # Ensure the directory for the image exists in the upload folder
                save_dir = os.path.join(UPLOAD_FOLDER, image_dir)
                if not os.path.exists(save_dir):
                    os.makedirs(save_dir, exist_ok=True)

                # Create the full path for saving the image
                image_path = os.path.join(save_dir, image_filename)
                
                # Save the image file to the appropriate path
                with open(image_path, 'wb') as f:
                    f.write(image_data)
                
                image_paths.append(image_name)

    return image_paths if image_paths else None