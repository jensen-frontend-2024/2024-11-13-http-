# Http-protokollet, API och hur man bygger en server

<details open>
<summary>Innehåll</summary>

- [Mål med dagens genomgång](#mål-med-dagens-genomgång)

- [Vad är en server?](#vad-är-en-server)

  - [Klient](#klient)
  - [Server](#server)

- [Vad är ett API?](#vad-är-ett-api)

- [Kommunikation med HTTP-protokollet ](#kommunikation-med-http-protokollet)

  - [Vad är HTTP?](#vad-är-http)
  - [HTTP Request](#http-request)
  - [HTTP Response](#http-request)
  - [HTTP Statuskoder](#http-statuskoder)

- [Bygga en webbserver med Node och Express](#bygga-en-webbserver-med-node-och-express)

</details>

## Mål med dagens genomgång

1. Förstå vad en server är och hur den kommunicerar med en klient och en databas.
2. Lära sig om HTTP-protokollet och dess roll i kommunikationen.
3. Få en introduktion till vad ett API är och hur det används i webbutveckling.
4. Börja bygga en server med node och express.

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Vad är en server?

<image src="assets/server.jpg">

En server är helt enkelt en vanligt dator, programvara eller en tjänst som svarar på förfrågningar från olika typer av klienter. Den tillhandahåller data, eller tolika typer av tjänser till dessa klienter

En **klient** är en applikation, oftast en webbläsare som chrome. Men det kan även vara olika typer av mobiler, surfplattor eller liknande.

### Klient

**Klientens** syfte är i alla fall att skickar olika förfrågningar till en eller flera servrar. När någon form svar kommer tillbaka från en server så kommer klientet att visa upp den informationen på ett behändigt sätt.

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

### Server

**Servern** syfte i det här läget är att ta emot förfråganm bearbeta den och skicka tillbaka någon typ av svar. Till exempel så skulle det kunna vara någon specifik form av data som servern måste bygga ihop på något sätt. Antingen genom att göra ytterligare förfrågningar till andra servrar, eller till någon databas eller att den helt enklet konstruerar data själv.

Data kan ha flera olika former, kansken en bild, fil, video, en hel hemsida _( HTML Dokument )_ eller liknande. Det kan även vara något så enkelt som json-data som den skickar tillbaka.

All den här typen av arbete som en server gör, brukar kallas för business-logik. Kan vara väldigt tung logik som vi inte vill förlägga på en stackars klient.

Exempel på servrar:

- **Webbserver**: Tillhandahåller websidor och filer till klienten.
- **Databasserver**: Lagrar och hämtar data från databaser.
- **Applikationsservrar**: Utför någon form av logik och bearbetar data innan den skickas vidare, antingen till en annan server eller tillbaks till klienten

En server kan givietvis också utföra alla de här sakerna ovan. Det beror ju helt på arkitekturen på systemet som vi använder.

**Praktiskt exempel**

Tänk på en server som en resaturang: du (klienten) beställer mat (data) från en meny (API). Dennabeställnig tas emot av en kypare (HTTP-förfrågan) som leverarar den till köket/restaurangen (serven). Köket bearbetar, alltså lagar maten, och skickar sen tillbaks den med kyparen (HTTP-svar) som du sen kan använda dig utav, alltså äta.

<image src="assets/http-request.png">

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Vad är ett API?

Ett API uppsättning regler och protokoll som gör att olika programvaror kan kommunicera med varandra. I webbaplikationer är ettAPI ofta en uppsättning väl definierard endpoints (URL:er) som en klient kan använda för att utföra olika operationer. Till eempel, att hämta någon form av data eller att skicka iväg data.

En endpoint är kan man säga en specifik address till den resursen (datan) som vi är intresserade utav. Vi kan inte skicka förfrågningar till random endpoints utan det måste vara endpoints som faktiskt finns. Oftast behöver vi som användere inte tänka på det här. Utan vi använder oss bara att applikationen, och trycker på de visuella representationera av det vi är ute efter. Sen kommer applikationen gå in och förfråga data till de specifka endpointsen.

**Några exemepel**

Willys tillhandahåller olika typer av data på dessa endpoints:

- `GET` "sortiment/kott-chark-och-fagel" - Hämtar varor som är kopplade till kött-chark och fågel-kategorin.

- `GET` "artikel/inspiration/nyheter" - Hämtar olika nyheter som ska vara till för "inspierar" dig som kund.

- `GET` "sortiment/dryck" - Hämtar alla artiklar som har något med dryck att göra.

**Kort och gott** - Genom att använda API:er kan klienter och servrar kommunicera utan att avslöja den bakomliggande implementationen.

<br>
<image src="assets/api2.png" width="500">
<image src="assets/api1.png" width="700">
<br>
<br>
[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Kommunikation med HTTP-protokollet

### Vad är HTTP?

- HTTP _( HyperText Transfer Protocol )_ är ett protokoll för att överföra data över internet och styr hur klienter och servrar kommunicerar.

- HTTP fungerar enligt en "request-respons"-modell där klienten skickar ett **request** och en server skickar tillbaka ett **response**.

Denna kommunikation funkar genom att det alltid kommer att vara ett response på varje request. Sen om requestet innehåller det du efterfrågade eller inte är en annan sak. Men du kommer alltid att få ett response tillbaka med någon typ av information.

### HTTP Request

Vad består ett HTTP request utav. Givetvis så är det flera olika delar men vi ska fokusera på några stycken.

- **Method**: anger vilken typ av operation som klinten önskar att utföra.

  - GET: Hämta data
  - POST: Skicka data till servern
  - PUT: Uppdatera data
  - DELETE: Ta bort data

- **URL**: anger vilken resurs som klienten begär eller önskar påverka.

- **Headers**: Metadata _( extra information )_ om ditt request. Kan vara massa olika saker men till exmepl skulle det kunna vara information om vilken typ av data ta vill ta emot. Det kan även vara någon form av autentiseringstoken och så vidare.

- **Body ( valfritt )**: Innehåller data som skickas med i requestet. Används i princip uteslutande när vi gör en POST eller PUT.

### HTTP Response

När servern tar emot och bearbetar ett request skickar den tillbaka en response till klienten.

Den består av:

- **Statuskod**: Anger resultaten av requestet. Finns många såklart men några är:

  - 200 = OK, 404 = Not Found, 500 = Internal Server Error.

- **Headers**: Metadata om svaret. Kan innehålla massa olika saker.

- **Body (valfritt)**: Innehållet av datan som retuneras. Kan vara HTML, JSON, strängar, eller om man har otur XML. Finns flera saker som kan returneras också.

### HTTP Statuskoder

En statuskod är egentligen bara ett kort meddelande om hur det gick för ditt request. Vard det ok? Eller saknas något eller liknande. Olika statuskoder representerar olika saker.

- 1xx: Infromationskoder. (100 Continue)

- 2xx: Framgångskoder. (200 OK, 201 Created)

- 3xx: Omdirigeringskoder. (301 Moved Permanently)

- 4xx: Klientfel, alltså fel från klientens sida. (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)

- 5xx: Serverfel, om vårt request inte lyckas bearbetas av servern av en outgrundlig anledningen. (500 Internal Server Error)

Här har ni en länk till en lista av de vanligaste statuskoderna: [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Bygga en webbserver med Node och Express

### Skapa ett node-projekt

Innan vi börjar så måste vi starta ett "node-projekt" och då behöver vi en speciell fil som heter `package.json`. För att få den så behöver skriva detta kommando i terminalen, i denna mappen som vi befinner oss i.

```bash
npm init -y
```

Detta kommando kommer att skapa en `package.json` fil i vårt projekt och dess syfte är att hålla koll på de npm-paket som vi installerar under projektets gång. Vi kommer i princip aldrig behöver göra manuella ändringar i denna fil, utan det sker automatiskt med hjälp av de kommandona vi använder oss av.

Så det första paketet vi ska installera heter kort och gott `express`. Installera det genom följande kommando:

```bash
npm install express
```

När vi har gjort detta så dyker det upp en ny fil `package-lock.json` och en mapp `node_modules`. Dessa två är lika viktiga som vår `package.json` fil, då de håller koll på alla filer som har laddats ner samt exakt vilken version varje fil är i.

Så sammanfattningsvis

- **package.json**: Håller koll på alla npm-paket som har installerats. Ska hänga med upp på git.

- **package-lock.json**: Håller koll på alla versioner av alla filer som har laddats ner via npm. Ska hänga med upp på git.

- **node_modules:** Här i sparas alla filerna som har laddats ner via npm. Kan bli väldigt, väldigt stor. Den ska INTE hänga med upp på git.

För att se till att rätt filer hänger med upp på git. Speciellt node_modules ska ignoreras av git så vi behöver skapa en fil som heter `.gitignore`. Den filen öppnar vi upp och skriver in de mappar och filer vi vill att git ignorerar.

### Skapa en express-server

Det första vi gör är att importera in express i vår js-fil.

```js
const express = require("express");
```

All funktionlitet som ingår i express kommer ni att vara samlat i min express-variabel. Denna variabel är enligt dokumentation en funktion, så vi har egentligen en funktionsreferens här som vi sen kan anropa.

MEN tänk på, olika npm-moduler är byggda olika så de kommer förmodligen inte följa samma mänster som just express.

Nästa steg, skapa en server.

```js
const app = express();
```

I och med att expresspaketet returnerar en funktionsreferens så anropar jag den här och returvärdet av den funktionen är helt enkelt en server, kan vi säga, med server funktionalitet.

Vi sätter igång där här servern genom att anropa ett lyssnar-funktion:

```js
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Anonym callback med function-nyckeloreder
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
```

Denna funktion sätter igång servern men den kräver två argument. Den första är vilken port servern ska köras på. Den andra är en anonym callbackfunktion som körs när server väl har startat.

En callback-funktion är egentligen bara en funktin som används som ett argument i en annan funktion. Den har oftast formen som en arrow-funktion.

```js
// Normal funktion med function-nyckelordet
function fn() {
  // code
}

// Samma funktion fast som en arrow-funktion
const fn = () => {
  // code
};
```

Nu kan vi köra igång servern genom att skriva:

```bash
node index.js
```

Servern är nu igång och tuggar på och inväntar requests. Dock så har vi ju inga så inget händer. Vill man absoluta servern manuellt trycker vi bara på `ctrl + c`.

Så enkelt var det! Självklart är processen att skapa en server krånglare än så här, men som tur är så är express-paketet väldigt användbart här och gör allt det tunga arbetet åt oss. Vi bara tre rader kod så har vi fått igång en server.

1. Importerat express
2. Skapat vår server
3. Startat vår server

Detta är det kraftfulla med npm-paket. De kan underlätta otroligt mycket för oss.

### Skapa vår första endpoint

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)
