const app = new Vue({
    el: "#app",
    data: {
        mailingList: []
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp);
                    this.mailingList.push(resp.data.response)
                });
        }
    },
})