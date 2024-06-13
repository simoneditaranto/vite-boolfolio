<script>

export default {

    name: 'AppJumbo',

}



</script>

<template>

    <div id="jumbo">

        <div class="container">
        

            <div class="my-name">
                Simone
            </div>
    
            <div class="my-role">
                Web Developer
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

#jumbo{
    /* background-image: url('../images/jumbo.jpg');
    background-size: cover; */

    height: 600px;

    .container{
        position: relative;
        height: 100%;

        .my-name{
            position: absolute;
            top: 20%;
            left: 0;

            font-size: 8em;
            text-transform: uppercase;
        }

        .my-role{
            position: absolute;
            top: 50%;
            right: 0;

            font-size: 5em;
            text-transform: uppercase;
        }

    }

    
}



</style>