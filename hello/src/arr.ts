//#region 数组类型
// 一般数组
let arr1:number[] = [1,2,3];
arr1.push(4)
console.log(arr1);

let arr2:Array<number> = [11,22,33,];
arr2.push(44);
console.log(arr2);

// 固定长度和类型的数组
let arr3:[number, string, boolean] = [1,'2', true];
console.log(arr3);
arr3[0] = 2;
console.log(arr3);
arr3.push(false);
console.log(arr3);

// 任意类型的数组
let arr4:any[] = [true, 1, 's'];
console.log(arr4);
arr4[3] = '3';
console.log(arr4);
arr4[5] = 5;
console.log(arr4);
//#endregion
