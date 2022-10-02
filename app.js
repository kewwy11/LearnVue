const app = Vue.createApp({
    data(){
        return{
            userName: 'Erhisohwode Grateful',
            userAge: 18,
            imageLink: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600'
        };
    },

    methods: {
        sumOfAge(){
            return this.userAge + 5
        },
        favoriteNum(){
            return Math.random()
        }
    }
});

app.mount('#assignment');