<template>
    <div>
        <form action="">
            <input type="text" v-model="X" placeholder="X">
            <input type="text" v-model="Y" placeholder="Y">
            
        </form>
        <button type="submit" v-on:click="calculer"> calculer</button>
        <p>resultat de X+Y = {{result}}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            X:"",
            Y:"",
            result:""

        }
    },
    methods:{
        calculer(){
            this.result = this.X + this.Y
        }
    }
}
     /*export default{
       data(){
        return{
            username:"",
            password:""
        }
       },
       methods:{
        login(){

        }

       }
     }*/
</script>