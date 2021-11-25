<template>
  <div class="ct-card">
    <div class="ct-card-img">
        <img class="img-card" src="../assets/img/moon.jpg" alt="image">
    </div>
    <div class="ct-card-info">
        <div class="ct-icons">
            <div class="ct-icons-like">
                <button class="bt-ico"><img class="img-ico" src="../assets/star.svg" alt="star value button"></button>
                <button class="bt-ico"><img class="img-ico" src="../assets/heart.svg" alt="love button"></button>
            </div>
            <div class="ct-icons-modify">
                <button class="bt-ico"><img class="img-ico" src="../assets/edit.svg" alt="edit button"></button>
                <button class="bt-ico"><img class="img-ico" src="../assets/delete.svg" alt="delete button"></button>
            </div>
        </div>
        <div class="ct-txt">
            <h6 class="txt-card-title">Nombre de la imagen</h6>
            <p class="txt-card-user">Nombre de usuario</p>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$colorPrincipal: #1664A4;
$colorSecondary: #F4F4F4;
$colorCard: #C2DCDE;
$filterPrincipal: invert(26%) sepia(19%) saturate(6454%) hue-rotate(189deg) brightness(99%) contrast(83%);
@mixin displayFlex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ct-card{
    width: 300px;
    height: 380px;
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
    justify-content: start;
    margin-left: 15px;
}
.ct-icons-modify{
    @include displayFlex();
    width: 50%;
    justify-content: end;
    margin-right: 15px;
}
.bt-ico{
    background-color: transparent;
    border: none;
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
    align-items: start;
}
.txt-card-title{
    @include displayFlex();
    margin: 0px;
    justify-content: start;
    padding-left: 15px;
    font-size: 1rem;
}
.txt-card-user{
    @include displayFlex();
    margin: 0px;
    justify-content: start;
    padding-left: 15px;
    font-size: 0.8rem;
}

/* display: grid;
grid-template-columns: 300px 300px 300px;
grid-template-rows: 380px 380px;
gap: 10px; */

</style>
