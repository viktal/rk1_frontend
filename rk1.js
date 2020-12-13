//version 1
let CreateHash1 = () => {
    let map = {};
    this.set = (key, value) => {
        map[key] = value;
        return this;
    }
    this.remove = (key) => {
        delete map[key];
        return this;
    }
    this.getHash = () => {
        return map;
    }
    return this;
};

const hash1 = CreateHash1();
hash1.map = {anyOtherProps: 'lol'};
console.log(hash1.getHash()); //{}

console.log(hash1.set('key', 'value')
    .set('key2', 'value2')
    .remove('key')
    .set('key3', 'value3')
    .getHash() // {key2: value2, key3: value3}
);

//version 2
let createHash2 = () => {
    let map = {};
    return {
        set: function (key, value) {
            map[key] = value;
            return this;
        },
        remove: function (key) {
            delete map[key];
            return this;
        },
        getHash: function () {
            return map;
        }
    }
}

const hash2 = createHash2();
hash2.map = {anyOtherProps: 'lol'};
console.log(hash2.getHash()); //{}

console.log(hash2.set('key', 'value')
    .set('key2', 'value2')
    .remove('key')
    .set('key3', 'value3')
    .getHash() // {key2: value2, key3: value3}
);
