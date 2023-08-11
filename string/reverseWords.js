let s = "  hello world  "
function display(s) {
    let words = []
    let word = ""
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] !== " "){
           word = word+s[i] 
        }else{
            if(word !== ""){
                words.push(word);
                word = ""    
            }
        } 

    }
    if(word !== ""){
        words.push(word)
    }
    let reverseWords = []
    for(let i = words.length-1 ; i >= 0 ; i--){
        reverseWords.push(words[i])
    }
    return reverseWords.join(" ")
}
console.log(display(s));