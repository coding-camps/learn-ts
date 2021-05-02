
//#region demo hello
let src:string = "Hello Typescript ~!";
console.log(src);
//#endregion

//#region 基本类型
console.log("----------基本类型");
let str:string = "字符串";
let num:number = 123;
let bool:boolean = true;
let _undef:undefined = undefined;
let _null:null = null;
console.log(str);
console.log(null);
console.log(bool);
console.log(_undef);
console.log(_null);
//#endregion

//#region 混合类型/联合类型
console.log("----------混合类型/联合类型");
let arg:number|string = 'one string'
console.log(arg);

arg = "another string";
console.log(arg);

arg = 123;
console.log(arg);

//#region 解决多文件冲突问题
export default {}
//#endregion
