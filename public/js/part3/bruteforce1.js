let alpa = []

let test = 0
let einstelling = 0
let a =0
index = 0 

function run(parans) {
    if(einstelling == 0 ) {
        console.logalpa[test]
        test ++
    }
    if (test == alpha.length ) {
        einstelling = 1
    }else if (einstelling ) {
        index++
        console.log(alpa[a] + alpa[index])
    }
    if (index == 25 ) {
        index =-1
        a++
    }
    if(a == alpa.length) {
        clearInterval(interval)
    }
}   

let interval = setInterval(run,10)