# nickname
> Get a list of nicknames or a random nickname

[![Codeship Status for bukinoshita/nickname](https://app.codeship.com/projects/90091c50-e040-0134-5a77-3aef95d095ec/status?branch=master)](https://app.codeship.com/projects/205196)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/nickname.svg)](https://www.npmjs.com/package/nickname)
[![license](https://img.shields.io/github/license/bukinoshita/nickname.svg)](https://raw.githubusercontent.com/bukinoshita/nickname/master/LICENSE)

## Install
```
$ npm install --save nickname
```

## Usage
```js
import nickname from 'nickname'

console.log(nickname.all)
// => ['amandabeach', 'austinholman', 'tylermayer', ...]

console.log(nickname.random())
// => braydenbranch
```

## API
### nickname

#### .all
Return an array of nicknames

#### .random()
Return a random nickname

## Related
- [Names](https://github.com/bukinoshita/Names) — List of names
- [namae](https://github.com/bukinoshita/namae) — :couple: Get a list of names or a random name
- [rnd-age](https://github.com/bukinoshita/rnd-age) — :keycap_ten: Generate a random age
- [rnd-date](https://github.com/bukinoshita/rnd-date) — :date: Get a random date
- [faceit](https://github.com/bukinoshita/faceit) — :information_desk_person: Diverse user images for user interface design
- [rnd-drawish](https://github.com/bukinoshita/rnd-drawish) — :twisted_rightwards_arrows: List of words & random word

## License
[MIT](https://github.com/bukinoshita/nickname/blob/master/LICENSE) &copy; Bu Kinoshita
