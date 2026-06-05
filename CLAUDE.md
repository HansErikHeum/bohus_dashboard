# Bohus BI-dashboard — Prosjektkontekst for Claude Code

## Hva dette er
Et BI-dashboard bygget som en enkel nettside uten innlogging. Nettsiden sendes til kunden (Bohus) som en demo/prototype for å vise hvordan et datadrevet styringsdashboard kan se ut. Målet er at Bohus skal bruke dashbordet til å ta datadrevne beslutninger, detektere initiativer som må gjøres, og måle resultatet av initiativer de setter i gang.

Prosjektet er bygget i Next.js med TypeScript og Tailwind CSS, og hostes på Vercel. Alle endringer pushes til GitHub og deployes automatisk.

---

## Kunden: Bohus

### Om selskapet
- Norges største møbel- og interiørkjede
- 72 butikker fordelt på 15 regioner
- Feirer 50 år i 2026
- Nettsiden: bohus.no

### Transformasjonsreise (viktig kontekst)
Bohus var tidligere ~100 aksjonærer / 60 separate AS (familieeid kjede). Fra juli 2025 fungerer de som ett konsern med sentralisert kjededrift. Dette betyr at mange av KPI-ene i dette dashbordet er nye for dem — de har ikke hatt innsyn i butikkenes tall på tvers tidligere. Dashbordet skal reflektere dette: enkelt, troverdig, og med data de ikke har hatt tilgang til før.

### Forretningsmodell
- Destinasjonshandel (ikke impulshandel) — lav trafikk, høye snittkurver
- Konverteringsrate (hitrate): ~30%
- Bruttomargin: ~50% gjennomgående — viktig referansepunkt i all datavisualisering
- Selger primært bestillingsvarer, ikke lagervarer
- Eneste norske møbelkjede med sentrallager
- Omni-channel: kunden er på nett før, under og etter butikkbesøk
- Vekst siste år: 13%

### Konkurrenter
Skeidar, Fagmøbler, Møbelringen (mid-market). JYSK er en voksende trussel på lavpris/hagemøbler.

### Kontaktperson hos Bohus
Krister A. Pedersen

---

## Dashboardstruktur

Dashbordet har 5 sider. Hold navigasjonen enkel — sidebar eller toppnavigasjon.

### Side 1 — Topline
Øverste ledelsesblikk. Alt viktig på én side, ingen filtrering nødvendig.

**KPIer:**
- Omsetning (vs. fjoråret og budsjett)
- Bruttomargin %
- Antall transaksjoner
- Gjennomsnittlig ordrestørrelse (AOV)
- Andel nett- vs. butikksalg

### Side 2 — Butikk
Drill-down per butikk og region. Designet for å oppdage hvilke butikker som over- eller underpresterer.

**KPIer:**
- Omsetning per butikk (vs. fjoråret)
- Bruttomargin % per butikk
- Konverteringsrate (hitrate)
- Trafikk inn i butikk
- Gjennomsnittlig ordrestørrelse
- Omsetning per kvadratmeter

**Filter:** Region, enkeltbutikk, periode

### Side 3 — Økonomi
Rene finanstall for controlling og oppfølging.

**KPIer:**
- Omsetning
- Bruttoresultat
- Bruttomargin %
- Avvik mot budsjett
- Utvikling over tid (ukentlig / månedlig)

**Filter:** Periode, region, butikk

### Side 4 — Produkter og kategorier
For kategorisjefene.

**KPIer:**
- Omsetning per kategori
- Margin per kategori
- Andel nett- vs. butikksalg per kategori
- Toppselgende serier og varianter
- Kampanjeeffekt (omsetningsløft under kampanje vs. normalperiode)

*Merk: Priselastisitet er fase 2 — ikke ta med i første versjon.*

### Side 5 — Kunder
Forutsetter at Bo:klubben-data er koblet mot transaksjoner.

**KPIer:**
- Andel salg fra Bo:klubben-medlemmer
- Snittkurv (medlem vs. ikke-medlem)
- Kjøpsfrekvens per medlem
- Andel engangskunder vs. gjenkjøpskunder
- Geografisk fordeling av kunder per butikk

---

## Butikkoversikt — 72 butikker, 15 regioner

```
Agder (3):            Arendal, Lyngdal, Sørlandsparken
Akershus (6):         Billingstad, Eidsvoll, Jessheim, Strømmen, Triaden Lørenskog, Vinterbro
Buskerud (4):         Drammen, Gol, Hønefoss, Kongsberg
Finnmark (3):         Alta, Hammerfest, Kirkenes
Innlandet (7):        Elverum, Gjøvik, Hadeland, Hamar, Leira, Lillehammer, Tynset
Møre og Romsdal (4):  Ålesund, Furene, Kristiansund, Molde
Nordland (7):         Bodø, Brønnøysund, Leknes, Mo i Rana, Mosjøen, Sandnessjøen, Sortland
Oslo (4):             Alna, Skøyen, Storo, Torggata
Østfold (4):          Askim, Fredrikstad, Moss, Rakkestad
Rogaland (5):         Egersund, Forus, Haugesund, Jæren, Karmøy
Telemark (3):         Herkules Skien, Notodden, Porsgrunn
Troms (4):            Finnsnes, Harstad, Storslett, Tromsø
Trøndelag (8):        Brekstad, Lade Trondheim, Moholt Trondheim, Namsos, Oppdal, Steinkjer, Stjørdal, Verdal
Vestfold (2):         Larvik, Tønsberg
Vestland (8):         Åsane, Drotningsvik, Førde, Nordås, Odda, Os, Sogn, Stord
```

---

## Produktkategorier
Sofa, Seng, Madrasser, Bord, Stoler, Hagemøbler, Lamper, Tepper, Gardiner, Tekstil, Kjøkkenutstyr, Oppbevaring, Interiørdekor, Varmekilder, Solskjerming, Barnerom, Hytte, Hjemmekontor, Bad

---

## Dummy-data

All dummy-data lagres som JSON-filer i `/data/`. Én fil per datadomene:

- `/data/stores.json` — butikker med region, omsetning, margin, trafikk, AOV
- `/data/categories.json` — kategorier med omsetning og margin
- `/data/topline.json` — aggregerte tall for Topline-siden
- `/data/customers.json` — Bo:klubben-data

**Viktige forutsetninger for dummy-data:**
- Bruttomargin skal ligge rundt 50% — dette er Bohus sitt faktiske nivå
- Vekst year-over-year skal ligge rundt 13% totalt
- Oslo-butikker (Alna, Skøyen, Storo, Torggata) skal ha høyest omsetning
- Nord-Norge butikker (Finnmark, Nordland, Troms) skal ha lavere omsetning men jevn margin
- Nettandel av omsetning: ca. 20-25%
- Bo:klubben-andel av salg: ca. 40-50%

---

## Teknisk stack
- **Framework:** Next.js 14+ med App Router
- **Språk:** TypeScript
- **Styling:** Tailwind CSS
- **Datavisualisering:** Recharts (foretrekkes) eller Chart.js
- **Hosting:** Vercel
- **Versjonskontroll:** GitHub (HansErikHeum/bohus_dashboard)

---

## Design og tone
- Profesjonelt og rent — dette er en B2B-demo til en retailkjede
- Ikke overbelast sidene med tall — prioriter det viktigste
- Norsk språk i alle labels, titler og beskrivelser
- Bohus sine farger: mørk grønn/antrasitt og hvit (se bohus.no for referanse)


Farger (bekreftet + observert)
Den eneste fargen jeg kan bekrefte direkte fra kildekoden er #353539 — brukt konsekvent som theme-color og tile-color. Det er en varm, mørk antrasitt (ikke ren svart).
Resten er basert på visuell observasjon av nettsiden:
Primær mørk (antrasitt):  #353539   ← bekreftet fra meta-tags
Hvit bakgrunn:            #FFFFFF
Lys grå (bakgrunner):     #F5F5F3   ← varm, ikke kald
Mellomgrå (borders):      #E8E8E6
Tekst sekundær:           #6B6B6B
Aksent/CTA (rød):         #C8102E   ← kampanjeknapper, "Salg"-banner
Typografi
Bohus bruker en clean, geometrisk sans-serif. Jeg kan ikke bekrefte nøyaktig hvilken, men profilen tilsvarer Inter eller lignende. For dashbordet anbefaler jeg å spesifisere:
Font:          Inter (Google Fonts) — matcher Bohus sin profil godt
Heading:       font-weight 600–700, letter-spacing litt tett
Body:          font-weight 400, line-height 1.5
KPI-tall:      font-weight 700, stor størrelse (tabular-nums)
Visuell stil
Skandinavisk minimalistisk. Mye luft, tydelig hierarki, ingen overflødige dekorative elementer. Produktfotografiet dominerer med varme naturlige toner (beige, sand, eik) — det er den varme undertonen du ser overalt.
For dashbordet spesifikt:
Sidebar/header:     #353539 (mørk antrasitt) med hvit tekst
Bakgrunn sider:     #F5F5F3 (varm lys grå)
KPI-kort:           Hvit (#FFFFFF) med lett skygge
Positiv trend:      #2D7D46 (grønn)
Negativ trend:      #C8102E (rød)
Grafer:             #353539 som primær, #C8102E som aksent

