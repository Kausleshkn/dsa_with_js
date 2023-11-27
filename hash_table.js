
class HashTable {

    constructor(size) {
        this.table = new Array(size);
        this.Size = 0;
    }

    _key(val) {

        let hash = 0;
        for (let i = 0; i < val.length; i++) {
            hash += val.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, val) {
        let index = this._key(key);
        if (!this.table[index]) {
            this.table[index] = [];
            this.table[index].push([key, val]);
            this.Size++;
        } else {
            this.table[index].push([key, val]);
            this.Size++
        }
    }

    get(key) {
        let index = this._key(key);
        let arr = this.table[index];

        if (arr) {
            for (let i = 0; i < arr.length; i++) {

                if (arr[i][0] == key) {
                    let obj = { [arr[i][0]]: arr[i][1] }
                    return obj[arr[i][0]];
                }
            }
        } else {
            return undefined;
        }
    }

    remove(key) {
        let index = this._key(key);
        let current = this.table[index];

        if (current) {
            for (let i = 0; i < current.length; i++) {

                if (current.length > 1) {
                    if (current[i][0] == key) {
                        current.splice(i, 1);
                        this.Size--;
                        return true
                    }
                } else {
                    if (current[i][0] == key) {
                        delete this.table[index];
                        this.Size--;
                        return true
                    }
                }
            }
        } else {
            return false;
        }
    }

    display() {
        let arr = this.table;
        let newArr = arr.filter(val => val !== false);
        let obj = {};

        for (let i = 0; i < newArr.length; i++) {

            if (newArr[i].length === 1) {
                obj[newArr[i][0][0]] = newArr[i][0][1];
            }

            if (newArr[i].length > 1) {

                for (let j = 0; j < newArr[i].length; j++) {

                    obj[newArr[i][j][0]] = newArr[i][j][1];

                }
            }
        }
        return obj;
    }

    keysNvalue() {

        let obj = this.display();
        let arr = [];

        for (let key in obj) {

            arr.push([key, obj[key]]);
        }
        return arr;
    }
}

let ht = new HashTable(20);












