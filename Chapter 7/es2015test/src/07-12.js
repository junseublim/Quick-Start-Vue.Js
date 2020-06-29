var s1 = new Set();

s1.add("apple");
s1.add("apple");
s1.add("grape");
s1.add("orange");
console.log(s1);
var john = new Set(["apple", "pear", "grape"]);
var susan = new Set(["pineapple", "kiwi", "grape"]);
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);