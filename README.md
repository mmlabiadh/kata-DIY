# kata-DIY

Do a pull request with what you've done, and we'll make it perfect together. We'll look at it and do a review of what you've done, what's good and what can be upgraded. Hope we'll learn a lot of things together.

## Kata 1

You have to make a function that takes in an array of mobile contacts in any order and returns an object with all the contacts which name begins by A in `a` in alphabetical order (use firstname if equal), then all the B's contacts in `b`... and all contacts beginning with a number or special character in `#`. It should look like this :

```js
let result = yourfunction([
  {name: 'Wicked', firstname: 'John'},
  {name: 'Ali', firstname: 'Baba'},
  {name: 'Bond', firstname: 'Bond'},
  {name: 'Waldo', firstname: 'Eric'}
])
expect(result).toBe({
  a: [{name: 'Ali', firstname: 'Baba'}],
  b: [{name: 'Bond', firstname: 'Bond'}],
  w: [
    {name: 'Waldo', firstname: 'Eric'},
    {name: 'Wicked', firstname: 'John'}
  ]})
```
