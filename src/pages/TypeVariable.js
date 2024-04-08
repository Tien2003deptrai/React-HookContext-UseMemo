import React from 'react'

var iss = 2;

let string1 = [];

const func3 = () => {
    iss = 3;
    console.log('iss', iss)
    // console.log('is', is)
}

const TypeVariable = () => {
    // const - let - var

    /* var : is - khai bao sử dụng ngoài function - global (toàn cục func1 .... 
    nó cục bộ TypeVariable) */

    /* var : iss - khai bao sử dụng ngoài function - global (toàn cục TypeVariable
    toàn cục func1 .... )*/

    var is = 1

    const Func1 = () => {
        is = 2
    }

    /* var : number1 - khai báo trong function - chỉ sử dụng trong func4 
    chỉ thuộc về hàm func4 */
    function func4() {
        if (true) {
            var number1 = 3
        }
        console.log(number1)
    }

    function func5() {
        for (let i = 0; i < 10; i++) {
            console.log('i', i);
        }
        console.log('string', string1);
    }

    return (
        <>
            {
                func5()
            }
        </>
    )
}

export default TypeVariable