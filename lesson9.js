// замыкание, лексическое окружение, рекурсия

//globalLE {  } --> null

const car = 'bmw'

const startEngine = function () {
    console.log(`Start ${car}`)
}
startEngine()




const counter = () => {
    let i = 0;
    return () => {
        console.log(++i)
    }
};

const count1 = counter()
const count2 = counter()


count1()
count1()
count1()

count2()
count2()
count2()

let i = 0;
const counter2 = () => {
    return () => {
        console.log(++i + '-')
    }
};

const count21 = counter2()
const count22 = counter2()


count21()
count21()
count21()

count22()
count22()
count22()




const pow = (x,n) => {
    if (n===1) {
        return x;
    } else {
        return x*pow(x,n-1);
    }
}
