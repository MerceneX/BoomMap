# Priprava okolja
1. Kloniranje repozitorija z "git clone https://github.com/MerceneX/Praktikum-II.git"
2. Odpremo nov projekt v WebStorm "EmptyProject" in kopiramo vsebino kloniranega direktorija
v ta projekt
3. V WebStorm priporočam uporabo git bash terminala:    
a) Setting > Tools > Terminal   
b) Shell Path, navedemo pot do bash.exe datoteke, najdemo jo v */Git/bin/bash.exe
4. Zagon skript npm install, npm run client-install in npm i -g nodemon
5. Dodaja konfiguracije strežnika v WebStorm:   
a) "Add new configuration"  
b) "npm"    
c) "package.json: /path-to-project-folder/package.json"     
d) "Command: run"   
e) "Scripts: dev"   
f) "Ok"
6. Napišemo .gitignore datoteko s sledečo vsebino:  
"node_modules   
client/node_modules     
config/keys.js    
.idea"


# API Guide
## Endpoints
- GET api/data
- POST api/data
- GET api/data/nesrece
