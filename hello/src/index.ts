
//#region Hello World 示例
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


//#region 默认类型/类型推断 为设置的值的类型，不能再赋其他类型的值
console.log("----------默认类型/类型推断");
let argd = "hello default value";
console.log(argd);
//#endregion


//#region 任意类型
console.log("----------任意类型");
let argx:any = "any type";
console.log(argx);
argx = 123;
console.log(argx);
//#endregion


//#region 解决多文件冲突问题
export default {}
//#endregion
