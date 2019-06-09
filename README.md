<p align="center"><img src="client/src/components/design/boomLogo.svg" alt="boomMap" title="boomMap" width="500" height="130"/></p>

<p> Projekt je bil izveden v sklopu predmeta Praktikum 2, FERI ITK UN. </p>
<p> Mentor: doc. dr. Luka Pavlič </p>

## Kdo smo 
[<img alt="GluhakMarko" src="https://avatars3.githubusercontent.com/u/36963174?s=400&v=4" width="100">](https://github.com/MerceneX) |[<img alt="KonecnikMarusa" src="https://avatars1.githubusercontent.com/u/33929107?s=400&v=4" width="100">](https://github.com/marusakonecnik) |[<img alt="GornikPina" src="https://avatars3.githubusercontent.com/u/33715956?s=400&v=4" width="100">](https://github.com/Gornikpina) |[<img alt="FeherNatasa" src="https://avatars3.githubusercontent.com/u/33715956?s=400&v=4" width="100">](https://github.com/FeherNatasa) |
:---: |:---: |:---: |:---: |
[GluhakMarko](https://github.com/MerceneX) |[KonecnikMarusa](https://github.com/marusakonecnik) |[Gornikpina](https://github.com/Gornikpina) |[FeherNatasa](https://github.com/FeherNatasa) |


## O projektu
Naša rešitev zajema:
* pregled statistike prometnih nesreč iz preteklih let
* zemljevid s prikazom kritičnih točk (najpogostejše nevarnosti)
<p> Namen rešitve je ozaveščanje voznikov, reševalnih služb in tistih, ki se jim mudi, kje povečati potrplenje in zmanjšati hitrost. </p>

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
6. Za posodobitev vseh paketov/odvisnosti poženemo "npm run update-all"
7. Potrebujemo tudi bazo MongoDB na portu 27017.
8. Strežnik poženemo z npm run dev
9. Napišemo .gitignore datoteko s sledečo vsebino:  
"node_modules   
client/node_modules     
.idea
README.md"

# API Guide
## Endpoints
- GET api/data
- POST api/data
- GET api/data/nesrece
- GET api/graph/{id}
