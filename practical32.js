function isItAStringOrNot(parametar) {
    if (typeof parametar === "string" && parametar !== " ") {
        console.log("False")
    } else if (typeof parametar === "string" && parametar === " "){
        console.log("True")

    } return "";
} console.log(isItAStringOrNot(" "));