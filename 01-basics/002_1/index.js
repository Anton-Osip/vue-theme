const App = {
    data() {
        return {counter: 0, title: 'Счетчик'}
    },
    methods: {
        increment: () => {
            this.counter = this.counter + 1;
        }
    }
}


Vue.createApp(App).mount('#app')
