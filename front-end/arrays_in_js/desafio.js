(function(){
    function sum(){
        let nums = Array.from(arguments)
        return nums.reduce((acc, elem) => acc + elem)
    }

    function avg(){
        return sum(...arguments) / arguments.length
    }

    // maneira antiga --> ES5
    function sum2(){
        const nums = []

        Array.prototype.forEach.call(arguments, (argument) => nums.push(argument))
        return nums.reduce((acc, elem) => acc + elem)
    }

    function avg2(){
        return sum2.apply(null, arguments) / arguments.length
    }

    console.log(sum(...[1,2,4]))
    console.log(sum2(...[1,2,4]))
    console.log(avg(1,2,4))
    console.log(avg2(1,2,4))
})()