
//#region 面向对象
interface User {
    //只读属性
    readonly username: string,
    password: string,
    // 其他可选属性
    [props:string]:any
}

let u1:User = {
    username: "Jacob",
    password: "123456",
}
console.log(u1);
// u1.username is readonly property
// u1.username = "Jacob"; 

let u2:User = {
    username: "Gaussian",
    password: "123456",
    nickname: "prince of mathematics"
}
console.log(u2);

let u3: User = {
    username: "Nathan Jacobson",
    password: "123456",
    age: 89
}
console.log(u3);
//#endregion

//#region 面向对象之 *.d.ts
let p1:Point2d = {
    x: 1,
    y: 2,
};
console.log(p1);
//#endregion

