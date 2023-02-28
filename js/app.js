const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [],
            numeroMail: '',
        }
    },

    methods: {
        getMail() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mail.push(res.data.response)
                    // console.log(res.data.response)
                })
            console.log(this.mail)
        },

        displayArray() {
            // this.numeroMail = ''

            for (let i = 0; i < parseInt(this.numeroMail); i++) {
                this.getMail()
            }
        }
    }

}).mount('#app')