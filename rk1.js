//version 1
function CreateHash1() {
    let map = {};
    this.set = function (key, value) {
        map[key] = value;
        return this;
    }

    this.remove = function (key) {
        delete map[key];
        return this;
    }
    this.getHash = function () {
        return map;
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
function createHash2() {
    return {
        set: function (key, value) {
            this[key] = value;
            return this;
        },
        remove: function (key) {
            delete this[key];
            return this;
        },
        getHash: function () {
            delete this.set;
            delete this.remove;
            delete this.getHash;
            return this;
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
