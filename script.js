const app = new Vue({
    el: "#app",
    data: {
        mailingList: []
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(resp){
            console.log(resp);
            this.mailingList.push(resp.data.response)
        });
    },
})