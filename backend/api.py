import requests

url = "API URL HERE!"


def convert_currency(amount: str, from_currency: str, to_currency: str):
    params = {'amount': amount, 'from': from_currency, 'to': to_currency}
    r = requests.get(url=url, params=params)
    result = r.json()
    return result
