# rk1_frontend

Талмаза Виктория (команда MVVM)

Нужно реализовать паттерн chaining

```javascript
function createHash() {
// тут твоя реализация
}

const hash = createHash();

hash
    .set('key', value)
    .set('key2', 'value2')
        .remove('key')
        .set('key3', 'value3')
            .getHash() // {key2: value2, key3: value3}
;
```
