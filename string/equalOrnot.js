function removeHash(str){
    return str.replace("#","")
}
const string1 = removeHash("abc#")
const string2 = removeHash("ab#c")

if(string1===string2){
    console.log("equal");
}else{
    console.log("not equal");
}