# Embed-Tool

Um den Autoren im Unternehmen die Arbeit zu erleichtern, soll ein Tool erstellt werden, das einen responsiven Embed-Code für YouTube-, Facebook- und Vimeo-Videos erzeugt. Vorgegeben ist ein Code, der das iframe des Videos mit einem div umschließen soll:
``<div class='vimeo-space' style='padding: 56.25% 0 0 0; position: relative;'></div>``

## Embed-Tool mit Docker Compose starten

-   Um das Embed-Tool lokal auf dem Rechner zu betreiben, muss  [Docker Desktop](https://docs.docker.com/desktop/)  und  [Docker Compose](https://docs.docker.com/compose/install/)  installiert sein.

-  Sobald Docker Desktop gestartet wurde, navigiere mit dem Kommando  `cd`  im Terminal in den Dateipfad, wo der Quellcode des Embed-Tools abgelegt wurde. Beispiel:  `cd C:\Users\PC\Desktop\**dein-Pfad**`

- Anschließend kann mit dem Kommando `docker-compose up` der Container gestartet werden. Auf `http://localhost:8080` kann das Tool nun im Browser getestet werden.