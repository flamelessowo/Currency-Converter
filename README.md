# Currency Converter
Program that converts one currency into another

## Pre-install
* Install project
* cd into project directory
* install requirements into your global python or venv: pip install -r requirements.txt
* insert your api in file api.py

### Api key
To run this project you'll need a api key which u can get at: https://app.nocodeapi.com/marketplace
![image](https://user-images.githubusercontent.com/78107022/159069547-b620d3dc-c937-43dd-b3ed-3ddd099af6a3.png)

You'll need to get api endpoit and paste it here:
![image](https://user-images.githubusercontent.com/78107022/159069784-f926f0c6-3bc9-44e6-ad49-caa0a043edb2.png)

#### Run project
* run backend server in the first terminal: uvicorn backend:app --reload
* run any server that would hold frontend, I used python http server: python -m http.server 8001
* open localhost:8001/currency-converter.html
