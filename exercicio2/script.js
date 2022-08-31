const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log("Quantos caracteres tem a frase? " + minhaString.length)
console.log("E agora, quantos tem? " + minhaString.trim().length)
const minhaNovaString = minhaString.replace("________" , "sticioso")
console.log(minhaNovaString)


