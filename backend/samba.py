import os
import openai
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

SAMBA_API_KEY = os.getenv("SAMBA_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# for the prompt generation
def retrieveImagePrompt(text):
    input = "I want you to generate an input that effectively captures the page of a book, with the goal is to feed DALL-E with a detailed and descriptive prompt that brings the page to life visually. To give some context, this page is taken from 'Charlie and the Chocolate Factory (Puffin Modern Classics)' by Ronald Dahl. Return the prompt only. The page is:" + text

    client = openai.OpenAI(
        api_key=SAMBA_API_KEY,
        base_url="https://api.sambanova.ai/v1",
    )

    return client.chat.completions.create(
        model='Meta-Llama-3.1-8B-Instruct',
        messages=[{"role":"system","content":"You are an assistant that delivers effective prompts for image generators"},{"role":"user","content":input}],
        temperature =  0.1,
        top_p = 0.1
    )

def retrieveImageUrl(text):
    print(text)
    response = retrieveImagePrompt(text)
    print(response.choices[0].message.content)

    # for the image generation
    client = OpenAI(api_key=OPENAI_API_KEY)

    response = client.images.generate(
       model="dall-e-3",
       prompt=response.choices[0].message.content,
       size="1024x1024",
       quality="standard",
       n=1,
     )

    image_url = response.data[0].url
    print(image_url)
    return image_url

if __name__ == '__main__':
    text = "Charlie and the Chocolate Factory is a 1964 children's novel by British author Roald Dahl. The story features the adventures of young Charlie Bucket inside the chocolate factory of eccentric chocolatier Willy Wonka."
    retrieveImageUrl(text)