
function test():void {
    console.log("return nothing");
}
test();

//返回never的函数必须存在无法到达的终点。
function error(message: string): never {
    throw new Error(message);
}
// error('my error message');

//推断的返回类型为never
function fail() {
    return error('something failed.');
}
// fail();

//返回never的函数必须存在无法达到的终点
function infiniteLoop():never {
    while(true){
    }
}
// infiniteLoop();

