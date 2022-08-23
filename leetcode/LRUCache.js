/**
 * 146. LRU Cache
 */
class LRUCache {

    constructor(capacity) {
        this._size = capacity;
        this.cacheMap = new Map();
    }

    get(key) {
        if(!this.cacheMap.get(key)) return -1;

        const val  = this.cacheMap.get(key);
        this.cacheMap.delete(key);
        this.cacheMap.set(key, val);
        return this.cacheMap.get(key);
    }

    put(key, value) {
        if(this.cacheMap.has(key)){
            this.cacheMap.delete(key);
        }
        this.cacheMap.set(key,value);
        if(this.cacheMap.size > this._size){
            this.cacheMap.delete(this.cacheMap.keys().next().value);
        }
       
    }
}


let lRUCache = new LRUCache(2);

lRUCache.put(1, 0);

lRUCache.put(2, 2);

console.log(lRUCache.get(1));

lRUCache.put(3, 3);

console.log(lRUCache);

console.log(lRUCache.get(2));

lRUCache.put(4, 4);

console.log(lRUCache.get(1));

console.log(lRUCache.get(3));

console.log(lRUCache.get(4));



