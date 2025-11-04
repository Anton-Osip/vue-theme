const h = Vue.h

const app = Vue.createApp({
    data: () => ({
        title: 'Это из свойства template'
    }),
    methods: {
        changeTitle() {
            this.title = 'Изменили!'
        },
    },

    // template: `
    //   <div class = "card center">
    //     <h1>{{ title }}</h1>
    //     <button class = "btn" @click = "title='change'">изменить</button>
    //   </div>
    // `

    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'изменить')
        ])
    },
    beforeCreate() {
        console.log('beforeCreate')
    },

    created() {
        console.log('created')
    },

    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
})

app.mount('#app')
