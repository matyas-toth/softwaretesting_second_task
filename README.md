# Arab szám → római szám

A `toRoman` az 1 és 3999 közötti egész számokat alakítja római számmá. Érvénytelen bemenetre üres sztringet ad vissza.

## Futtatás

Node.js és npm kell hozzá.

```sh
npm ci
node -e "console.log(require('./roman').toRoman(1994))"
```

Eredmény: `MCMXCIV`.

## Tesztek

```sh
npm test
```

Böngészőben is futtathatók: az `npm ci` után meg kell nyitni az `index.html` fájlt.
