Struktur beim Schreiben von Commits:

Am Anfang wird der Ort der Aenderung angegeben:

In Klammern folgt die Art und Weise:

Es gibt:

beispielort(feat): die Erklaerung
beispielort(fix): die Erklaerung
beispielort(structure): die Erklaerung

feat-neue Feature hinzugefuegt
fix-Problem behoben
structure-Struktur geaendert, Kommentare geschrieben (zur Verbesserung der Lesbarkeit)

Mit ! kann eine unvollstaendige Aenderung angegeben werden:

beispielort(!feat)-Feature nicht fertig
...
...

Wenn mehrere Orte veraendert werden muessen, kann mit Beistrichen gearbeitet werden:

beispielort, beispielort2(feat)-Feature wurde implementiert dafuer wurde beispielort und beispielort2 bearbeitet

Es ist nicht gueltig mehrere Aufgaben auf einmal zu commiten!

beispielort(feat, fix)!<NICHT GUELTIG!!!!!!>