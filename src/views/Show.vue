<template>
    <div>
        <h5>This will show the card that I click</h5>
        <p>{{card.imgName}}</p>
        <p>{{card.imgUser}}</p>
        <p>{{card.imgURL}}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Show',
    components: {

    },
    data: function(){
        return {
            id: null,
            card: {
                "imgName": "",
                "imgUser": "",
                "imgURL": ""
            }
        }
    },
    mounted: function(){
        this.id = this.$route.params.id;
        console.log(this.id);
        axios.get("http://localhost:3000/cards?id=" + this.id)
        .then(dato => {
            this.card.imgName = dato.data[0].imgName;
            this.card.imgUser = dato.data[0].imgUser;
            this.card.imgURL = dato.data[0].imgURL;
            console.log(this.card);
        })
    }

};

</script>

<style lang="sass">

</style>