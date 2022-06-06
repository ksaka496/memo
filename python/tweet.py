import json
import os
from requests_oauthlib import OAuth1Session

# API Key, Access Token 
consumer_key = 'consumer_key'
client_secret = 'client_secret'
access_token = 'access_token'
access_token_secret = 'access_token_secret'

oauth = OAuth1Session(consumer_key, client_secret, access_token, access_token_secret)

def lambda_handler(event, context):
    text = 'Hello Twitter!'
    
    payload = {'text': text}
    response = oauth.post(
        "https://api.twitter.com/2/tweets",
        json=payload,
    )
    if response.status_code != 201:
        raise Exception(
            "[Error] {} {}".format(response.status_code, response.text)
        )