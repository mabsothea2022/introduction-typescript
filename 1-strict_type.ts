let varaible = 'hello world'
// string = 12 => can't be use this method, because varaible is string type

// declear number type
let testNumber: number
testNumber = 10

// declera boolean type
let testBool: boolean
testBool = true
testBool = false
// testBool = 12
// testBool = 'Boolean'

// declear string
let testString: string
testString = 'Norton'

// declear with multiple/uniontype type
let testStringOrNumberOrBool: string | number | boolean
testStringOrNumberOrBool = 'String'
testStringOrNumberOrBool = 12
testStringOrNumberOrBool = true
testStringOrNumberOrBool = false


// declear array type in typescript
let testArray = ['Sothea', 'Vong', 'Smey', 'Vireak']
testArray.push('Meng')  // append new element to the end of array
// testArray.push(12)      // can't be push number to string array
// testArray.push(true)    // can't be push boolean to string array

let testNumberArray = [1, 2, 3]
testNumberArray.push(4)

// how to declear array string 
let testStringArray: string[]
testStringArray = ['one', 'two', 'tree']

// how to declear array number
let testNumbersArray: number[]
testNumbersArray = [10, 20, 30]

// declear uniontype/multilpe type
let testStringOrNumbersArray: (string | number)[]
testStringOrNumbersArray = [1, 'Two', 3, 'Four']

// object in typescript
let user = {
    // the user obj has 3 properties like username,age and isAdmin
    username: 'sothea.mab',
    age: 200,
    isAdmin: true
}

// how to change value in properties of user obj
// obj_name.properties_obj = new value base on type in first pro. obj
user.username = 'meng.sd'
user.isAdmin = false
user.age = 20
// user.id = SB2001 // can't be add because in user obj is doen't have id pro.

// declear obj with assign base type
let userObj001: {
    username: string,
    password: string,
    age: number,
    isManager: boolean
}

userObj001 = {
    username: 'sothea',
    password: 'abc123456',
    age: 21,
    isManager: true
}

let userObj002: {
    first_name: string,
    last_name: string,
    total_hour: number,
    position: string,
    single: boolean,
    phone?: string
}
userObj002 = {
    first_name: 'Pheak',
    last_name: 'Jim',
    total_hour: 200,
    position: 'Seller',
    single: true,
    // phone:'098765423'   // ដាក់ក៏បានមិនដាក់ក័បាន
}

// any type in typescript
let testAny: any;
testAny = 12
testAny = 'String'
testAny = true
testAny = []    // empty obj
testAny = {}    // empty array

let testAnyArray: any[]
testAnyArray = [1, 'two', 3, 'four']

// function in type script
let sayWelcome = () => {
    console.log('Hi,welcome')
}

// function return string
let funcReturnString = (): string => {
    console.log("hi")
    return "The function return string."
}

let multiple001 = (num: number) => {
    return num * 2
};
let multiple002 = (num: number): number => {
    return num * 2
};
let multiple003 = (num: number): void => {
    // Do something, but doen't return
};
let sum = (num1: number, num2: number,another?:number) => {
    return num1 + num2
}
sum(10,20)

let func = (user:{username:string;age:number;phone?:string})=>{
    console.log(user.username)
}

// https://www.youtube.com/watch?v=WlxcujsvcIY
// 14:25-1:06:40