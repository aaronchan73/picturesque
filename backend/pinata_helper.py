import os
import requests
from dotenv import load_dotenv

load_dotenv()

PINATA_API_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS"

PINATA_API_KEY = os.getenv("PINATA_API_KEY")
PINATA_SECRET_API_KEY = os.getenv("PINATA_SECRET_API_KEY")

def upload_file(file_path):
    headers = {
        "pinata_api_key": PINATA_API_KEY,
        "pinata_secret_api_key": PINATA_SECRET_API_KEY
    }

    with open(file_path, 'rb') as file:
        response = requests.post(PINATA_API_URL, files={'file': file}, headers=headers)

        if response.status_code == 200:
            print("File uploaded successfully")
            return response.json()['IpfsHash']
        else:
            print(f"Error: {response.text}")
            return None

def get_file(ipfs_hash):
    file_url = f'https://gateway.pinata.cloud/ipfs/{ipfs_hash}'

    response = requests.get(file_url)

    if response.status_code == 200:
        with open('downloaded_file.epub', 'wb') as file:
            file.write(response.content)
        print("File downloaded successfully!")
    else:
        print(f"Failed to download the file. Status code: {response.status_code}")

if __name__ == '__main__':
    ipfs_hash = upload_file('./Charlie_and_the_Chocolate_Factory.epub')
    print(ipfs_hash)
    get_file(ipfs_hash)
