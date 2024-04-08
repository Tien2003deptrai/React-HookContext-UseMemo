// var
function exampleVar() {
    if (true) {
        var name = 'john'
    }
    console.log('name', name);
}

function exampleLet() {
    if (true) {
        let name1 = 'John'
    }
    // console.log('name1', name1); - Error name1 is net define
}

function exampleConst() {
    const PI = 3.14;
    // PI = 3.15 - Error : Assignment to constant variable
    console.log(PI); // output : 3.14
}