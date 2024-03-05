const data = new Date()

console.log(data)
console.log(data.getDay())
console.log(data.getDate())
console.log(data.getMonth())
console.log(data.getTime())
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getUTCDate())
console.log(Date.UTC(2024, 4, 12))
console.log(Date.now())
console.log(data.getTimezoneOffset())

console.log()
console.log(data.setTime(0))
console.log(data)


console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleDateString())
console.log(data.toUTCString())