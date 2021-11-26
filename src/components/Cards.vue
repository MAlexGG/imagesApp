<template>
  <div class="ct-cards">
      <div class="ct-card" v-for="card in cards" :key="card.id">
        <div class="ct-card-img">
            <img class="img-card" v-bind:src="require(`@/assets/img/${card.imgURL}.jpg`)" v-bind:alt="`${card.imgName}`">
        </div>
        <div class="ct-card-info">
            <div class="ct-icons">
                <div class="ct-icons-like">
                    <button class="bt-ico"><img class="img-ico" src="../assets/star.svg" alt="star value button"></button>
                    <button class="bt-ico"><img class="img-ico" src="../assets/heart.svg" alt="love button"></button>
                </div>
                <div class="ct-icons-modify">
                    <button class="bt-ico" @click="showCard(card.id)"><img class="img-ico" src="../assets/edit.svg" alt="edit button"></button>
                    <button class="bt-ico" @click="deleteCard(card.id)"><img class="img-ico" src="../assets/delete.svg" alt="delete button"></button>
                </div>
            </div>
        <div class="ct-txt">
            <h6 class="txt-card-title">{{card.imgName}}</h6>
            <p class="txt-card-user">{{card.imgUser}}</p>
        </div>
    </div>
  </div>
  </div>
</template>



<script>
import {cardService} from "../../services/cardService";

export default {
  name: 'Cards',
  components: {
  },
  data () {
    return {
        cards:[],
        imgName: '',
        imgUser: '',
        imgURL: ''
    }
  },
  async created () {
    try {
      const res = await cardService.getAll()
      this.cards = res.data;
      } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async deleteCard(id){
        await cardService.deleteCard(id);
        const res = await cardService.getAll();
        this.cards = res.data;
    },
    async showCard(id){
        this.$router.push('/show/' + id);
        /* await cardService.showCard(id); */
        console.log(id);
    }
      
  }
}
</script>

<style lang="scss">
$colorPrincipal: #1664A4;
$colorSecondary: #F4F4F4;
$colorCard: #C2DCDE;
$filterPrincipal: invert(26%) sepia(19%) saturate(6454%) hue-rotate(189deg) brightness(99%) contrast(83%);
@mixin displayFlex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ct-cards{
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: 380px;
    gap: 1rem;
    justify-content: center;
    margin: 1rem;
}
.ct-card{
    width: 300px;
    height: 380px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.25));
}
.ct-card-img{
    width: 300px;
    height: 300px;
    overflow: hidden;
}
.img-card{
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}
.ct-card-info{
    @include displayFlex();
    width: 300px;
    height: 80px;
    background-color: $colorCard;
    flex-wrap: wrap;
}
.ct-icons{
    @include displayFlex();
    width: 100%;
    height: 40%;
}
.ct-icons-like{
    @include displayFlex();
    width: 50%;
    justify-content: flex-start;
    margin-left: 15px;
}
.ct-icons-modify{
    @include displayFlex();
    width: 50%;
    justify-content: flex-end;
    margin-right: 15px;
}
.bt-ico{
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.img-ico{
    width: auto;
    height: 20px;
    filter: $filterPrincipal;
    margin: 2%;
}
.ct-txt{
    @include displayFlex();
    width: 100%;
    height: 60%;
    flex-direction: column;
    align-items: flex-start;
}
.txt-card-title{
    @include displayFlex();
    margin: 0px;
    justify-content: flex-start;
    padding-left: 15px;
    font-size: 1rem;
}
.txt-card-user{
    @include displayFlex();
    margin: 0px;
    justify-content: flex-start;
    padding-left: 15px;
    font-size: 0.8rem;
}

/* display: grid;
grid-template-columns: 300px 300px 300px;
grid-template-rows: 380px 380px;
gap: 10px; */

</style>
