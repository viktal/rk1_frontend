//version 1
let CreateHash1 = () => {
    this.map = {};
    this.set = (key, value) => {
        this.map[key] = value;
        return this;
    }
    this.remove = (key) => {
        delete this.map[key];
        return this;
    }
    this.getHash = () => {
        return this.map;
    }
}

const hash1 = new CreateHash1();
console.log(hash1.set('key', 'value')
    .set('key2', 'value2')
    .remove('key')
    .set('key3', 'value3')
    .getHash() // {key2: value2, key3: value3}
);

//version 2
let createHash2 = () => {
    return {
        map: {},
        set: function (key, value) {
            this.map[key] = value;
            return this;
        },
        remove: function (key) {
            delete this.map[key];
            return this;
        },
        getHash: function () {
            return this.map;
        }
    }
}

const hash2 = createHash2();
console.log(hash2.set('key', 'value')
    .set('key2', 'value2')
    .remove('key')
    .set('key3', 'value3')
    .getHash() // {key2: value2, key3: value3}
);
