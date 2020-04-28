# JavaScript Project


## Uruchomienie aplikacji

### Instalacja zależności

Polecenie zainstaluje wszystkie zależności zapisane w pliku `package.json` jako `dependencies` oraz `devDependencies`.

```bash
npm install
```

### Uruchomienie serwera deweloperskiego

Polecenie wykona skrypt o nazwie `start` z pliku `package.json`, który uruchomi serwer deweloperski `webpack-dev-server`.

```bash
npm start
```

### Budowa aplikacji produkcyjnej

Polecenie wykona skrypt o nazwie `production` z pliku `package.json`, który uruchomi budowanie aplikacji poprzez `webpack`'a w trybie produkcyjnym. Zbudowane pliki będą dostępne w katalogu `dist`.

```bash
npm run production
```

## Instalacja dodatkowych zależności

### Instalacja zależności deweloperskich

```bash
npm install --save-dev @babel/plugin-proposal-optional-chaining
```

> Po instalacji zainstalowana zależność powinna pojawić się w pliku `package.json` w zbiorze `devDependencies`.


### Instalacja zależności produkcyjnych
```bash
npm install --save @fortawesome/fontawesome-free
```

> Po instalacji zainstalowana zależność powinna pojawić się w pliku `package.json` w zbiorze `dependencies`.


## Synchronizacja forka

### Wersja SSH
```bash
git remote add upstream git@github.com:cdv-poznan/javascript-project-starter.git

git fetch upstream

git rebase upstream/master
```


### Wersja HTTPS
```bash
git remote add upstream https://github.com/cdv-poznan/javascript-project-starter.git

git fetch upstream

git rebase upstream/master
```


## Zależności

### Deweloperskie

* [Babel](https://babeljs.io)
* [ESLint](https://eslint.org)
* [Prettier](https://prettier.io)
* [webpack](https://webpack.js.org/)

### Produkcyjne

* [FontAwesome](https://fontawesome.com)
* [Bootstrap](https://getbootstrap.com)
* [Chart.js](https://www.chartjs.org)
* [jQuery](https://jquery.com)
* [Lodash](https://lodash.com)
* [Popper.js](https://popper.js.org)
* [Push.js](https://pushjs.org)
