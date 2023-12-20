const { createApp} = Vue;

createApp({
    data(){
        return{
            emailList:[],
            email:''
        }
    },
    created(){
        for(i=0;i<10;i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) =>  {
            this.email = email.data.response;  
            this.emailList.push(this.email);
        });
    }
    }
}).mount('#app')