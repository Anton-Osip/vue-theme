const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: ['note 1', 'note 2', 'note 3', 'note 4']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.unshift(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        doubleCount() {
            console.log('doubleCount')
            return this.notes.length * 2
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            console.log("inputValueChanged", value)
            if (value.length > 10) this.inputValue = ''
        }
    }
}


Vue.createApp(App).mount('#app')
