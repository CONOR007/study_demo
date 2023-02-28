//模块导出文件
var name = "foo module";
function hello() {
  console.log("hello Boy");
}
class Person {}
console.log('6')
export { hello as helloBoy, Person };
export default name;
