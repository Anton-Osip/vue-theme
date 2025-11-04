Vue.createApp({
    data: () => ({
        title: 'Я есть Грут!',
        myHtml: '<h1>Vie 3 App</h1>',
        person: {
            FirstName: "Anton",
            lastName: "Osipchyk",
            age: 29
        },
        items: [1, 2, 3, 4, 5, 6],
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.inputRef.value)
            this.$refs.inputRef.value = ''
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')
