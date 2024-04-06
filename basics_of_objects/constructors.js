function Task(name){
    'use strict'
    if (this === undefined) return
    let _name = name
    // this.name = name
    this.createdAt = new Date()
    this.updateAt = null      
    this.changeName = function (newName){
        if(!newName) return
        _name = newName
        this.updateAt = new Date()
    }
    this.getName = function () {
        return _name 
    }
}

const task1 = new Task("minha task")
task1.changeName("task atualizada")

const task2 = new Task("minha task 2")

console.log(task1.getName())
task1.changeName("novo name")
console.log(task1.getName())

console.log(task1)
console.log(task2)

const task3 = Task("minha segunda tareafa")
// console.log(createdAt)
