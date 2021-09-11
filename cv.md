# Burima Evgenyi

## Frontend developer

![cat photo](https://avatars.githubusercontent.com/u/14860440?s=400&u=ef182a5930ae2b37d6f526c9c061815473fddc42&v=4)

Contact | Value
------------ | -------------
Email | cuksmail@gmail.com
Telegram | https://t.me/ClancyGruver
GitHub | https://github.com/clancyGruver

## Summary

## Skills
* Programming languages
  - HTML
  - CSS
  - JavaScript
  - PHP
  - Python
* Frameworks
  - Vue 2/3
  - React
  - Laravel
* Databases
  - MySQL
  - SQLite

### Experience
* Frontend developer April 2021 - now
* Emercom Russia July 2011 - April 2021

### Code example
https://www.codewars.com/kata/51fda2d95d6efda45e00004e
```javascript
function User() {
  this.rank = -8;
  this.progress = 0;
  this.incProgress = function(value) {
    if (value <- 8 || value > 8 || value === 0 || value !== parseInt(value)) 
      throw 'Error. Incorrect value'; 
    if (value >- 1) value--;
    var newRank = this.rank;
    if (this.rank >- 1) newRank--;
    var res = value - newRank;
    var mark = 10 * Math.pow(res, 2);
    if (res === 0) mark = 3;
    if (res === -1) mark = 1;
    if (res < -1) mark = 0;
    this.progress += mark;
    if (this.progress > 100){
      var step = Math.floor(this.progress * 0.01);
        this.progress -= step * 100;
        if (this.rank < 0 && this.rank + step >= 0){
          step++;
        }
        this.rank += step;
        this.rank = Math.min(8, this.rank);
    }
    if(this.rank === 8) this.progress = 0;
  }
}
```


### Education
* 2009 - 2013 South Ural institute of management and economics - specialist software engineer

### English level: A2