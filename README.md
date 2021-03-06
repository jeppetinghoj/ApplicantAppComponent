# ApplicantAppComponent
## Beskrivelse
Komponentet er udviklet i Angular, da dette framework lå længst fremme i erindringen.
Den visuelle opdeling består af et "applicants"-modul og et "applicant-detail"-undermodul. Dette følger separation of concerns, da der kan arbejdes på de individuelle moduler uafhængigt af hinanden.
Bootstrap er anvendt, da det giver hurtig adgang til prækonfigurede CSS-delelementer og et responsivt design til de fleste enheder.

Indlæsningen af ansøgere foregår vha. af en Angular-service, der tilgås med dependency injection. Servicen anvender en mock-up af prækonfigureret data. En sådan opbygning tillader nemt at ændre komponenenten til at få data udefra - fx fra en fil, database eller WEB API.
Dermed kan funktionalitet relativt nemt tilkobles komponenenten.

Tankerne bag kan umiddelbart sidestilles med React, der også er komponentbaseret og har mange ligheder med Angular.
Jeg kunne simpelthen ikke tyde ikonet ved siden af "clip"-ikonet, så det blev et snefnug i stedet.