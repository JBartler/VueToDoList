new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        numbers: 1,
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo)
            this.numbers++
        },
        removeTodo() {
            this.todos.pop()
            if (this.numbers > 1) {
                this.numbers--
            }
        },
        clearAll() {
            this.todos = []
            this.numbers = 1
        }
    }
})