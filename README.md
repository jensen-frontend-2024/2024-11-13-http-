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

Data kan ha flera olika former, kansken en bild, fil, video, en hel hemsida _( HTML Dokument )_ eller  liknande. Det kan även vara något så enkelt som json-data som den skickar tillbaka.

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

<image src="assets/api1.png">
<image src="assets/api2.png">

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Kommunikation med HTTP-protokollet

### Vad är HTTP?

### HTTP Request

### HTTP Response

### HTTP Statuskoder

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)

## Bygga en webbserver med Node och Express

[Tillbaks till toppen](#http-protokollet-api-och-hur-man-bygger-en-server)
