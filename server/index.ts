// type StringOther = 'snow' | 'summer' | 'widni'

// interface NumbersType {
//   x: number,
//   y: number,
//   other?: StringOther | string
// }

// function multiply({ x , y, other }: NumbersType): number {
//   if(!other) return x * y; //default result

//   const currentOperation = other === 'summer' ? x / y : y + x;
//   return currentOperation;
// }

// const numbers = { x: 10, y: 10 };
// multiply(numbers);


// type printResultType = (x: number, y: number) => number; 

// const resolveNumbers = (x: number, y: number) => x + y;
// const getResolveNumbers = (res: number): void => console.log('from callback', res);

// const callbackResult = (x: number, y: number, callback: (res: number) => void) => {
//   const result = x * y; 
//   callback(result);
// } 

// const printResult: printResultType = resolveNumbers;

// console.log(printResult(12, 5));
// callbackResult(10, 12, getResolveNumbers);
// <ol>



// const resp = undefined || 'foo'; // '' false null undefined 0
// const resp = true && 'foo'; // 'asdsa' true []

// higj order function
// const callbackOne = (x: number) => (y: number) => x * y;
// console.log(callbackOne(10)(2));

// const resultFunction = (num: any) => {
  // param ||= 'result' =>  param = param || 'result';
  // param &&= 'result' =>  param = param && 'result';
  // ~~(Math.random() * num) => Math.floor(Math.random() * num);
  // return ~~(Math.random() * num);
  // num ??= 'hola perros'; 
  // return num;
// }

// console.log(resultFunction(10));


// const userData = {
//   name: 'Juan Antoni',
//   getNameUppercased(age: number) {
//     console.log('calling', age);
//     return this.name.toUpperCase();
//   },
//   address:{
//     location: 'Peru',
//     manzana: 12,
//     created: false
//   }
// }

// console.log(userData.address?.location?.lat)





















