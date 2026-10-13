# Trailer – Axel Pleissner, Sachverständiger für Bauschäden

- `pleissner-trailer.mp4` – fertiges Video (1920×1080, 54 s, mit dezenter Hintergrundmusik)
- `index.html` – dieselbe Animation als Webseite (im Browser öffnen, Leertaste = Pause, „Vollbild“-Button)

## Neu rendern

```bash
python3 tools/music.py /tmp/music.wav
SP=/tmp node tools/capture.mjs "$PWD/index.html" /tmp/silent.mp4
ffmpeg -i /tmp/silent.mp4 -i /tmp/music.wav -c:v copy -c:a aac -shortest pleissner-trailer.mp4
```

Texte und Zeiten (`data-s` = Start, `data-e` = Ende in Sekunden) stehen direkt in `index.html`.
