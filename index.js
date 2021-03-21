function writeCards() {
    let names = [ 'Lisa', 'Kaitlin', 'Jan']
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(number) {
    let i = number
    while (i >= 0){
        console.log(i)
        i--
    }
}