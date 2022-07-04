function Foo(x) {
    // function bar() {
    //     return x;
    // }
    this.baz = function () {
        return x;
    }
}
Foo.prototype.baz = function () {
    return x;
}

//
let y = new Foo(7);
console.log(y.baz());
// console.log(y.bar());
