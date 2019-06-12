<p align="center"><img src="client/src/components/design/boomLogo.svg" alt="boomMap" title="boomMap" width="500" height="130"/></p>

## O projektu
Namen rešitve je ozaveščanje voznikov, reševalnih služb in tistih, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost. 

## Uporabljene tehnologije 
* React
* Node.js 
* MongoDB
* Python 

## Funkcionalnosti 
### Zemljevid 

Zemljevid prikazuje __nevarne odseke/kritične točke na slovenskih cestah__, kjer se po statističnih podatkih povzroči največ nesreč. 
Omogočena je tudi možnost filtriranja po tipu kritičnosti (nizka, srednja, visoka), ter dodatni filtri glede na dan v tednu, vreme, površje, mesec v letu in čas. 

### Statistika
Grafi prikazujejo predelane statistične podatke od leta 2014 do 2018. Prikazani so podatki o številu prometnih nesreč glede na različne filtre: 
* vse nesreče v preteklih letih (2014-2018)
* število nesreč glede na posamezen dan v tednu 
* glede na vreme, tip vozila, tip ceste, tip trčenja in nesreče, stanje prometa
* glede na intenzivnost poškodb (posebej tudi za intenzivnost v nedeljo in med prazniki) 
* po spolu povzročitelja

## Kdo smo 
[<img alt="GluhakMarko" src="client/src/components/design/markoG.svg" width="100">](https://github.com/MerceneX) |[<img alt="KonecnikMarusa" src="client/src/components/design/marusaK.svg" width="100">](https://github.com/marusakonecnik) |[<img alt="GornikPina" src="client/src/components/design/pinaG.svg" width="100">](https://github.com/Gornikpina) |[<img alt="FeherNatasa" src="client/src/components/design/natasaF.svg" width="100">](https://github.com/FeherNatasa) 
|:---: |:---: |:---: |:---: |
[Marko Gluhak](https://github.com/MerceneX) |[Maruša Konečnik](https://github.com/marusakonecnik) |[Pina Gornik](https://github.com/Gornikpina) |[Nataša Feher](https://github.com/FeherNatasa) |
|back-end razvijalec|strojno učenje|front-end razvijalka |front-end razvijalka|

## Priprava okolja
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

## Uporaba API
### Endpoints
- GET api/data
- POST api/data
- GET api/data/nesrece
- GET api/graph/{id}
