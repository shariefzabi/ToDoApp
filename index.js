function* Generaator() {
    console.log("Beofre Yeild1")
    yield 1
    yield 2
    console.log("hello")
}

let a = [1, 2, 3]
function* nextNatural() {
    var naturalNumber = 1;

    // Infinite Generation
    while (true) {
        yield ++naturalNumber;
        yield *Generaator()
    }
}



function* Yied() {
    console.log("form yield")

    yield* a;


}
var createOwnIterable = {
    *[Symbol.iterator]() {

        yield 'a';

        yield 'b';
        yield 'c';
    }
}

// for (let value of createOwnIterable) {
//     console.log(value);
//     // document.write("<br>");
// }


// // Calling the Generate Function
// var gen1 = Yied()
// for (let value of gen1) {
//     console.log(value)
// }
var gen2 = nextNatural()
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
