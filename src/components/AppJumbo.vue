<script>

export default {

    name: 'AppJumbo',

}



</script>

<template>

    <div id="jumbo">

        <div class="container">
        

            <div class="my-name animate__animated animate__backInRight">
                Simone
            </div>
    
            <div class="my-role animate__animated animate__backInLeft">
                Web Developer
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

#jumbo{
    // background-color: #101010;

    height: 600px;

    .container{
        // color: white;
        /* test */

        position: relative;
        height: 100%;

        .my-name{
            position: absolute;
            top: 20%;
            left: 20px;

            font-size: 8em;
            text-transform: uppercase;
        }

        .my-role{
            position: absolute;
            top: 50%;
            right: 20px;

            font-size: 5em;
            text-transform: uppercase;
        }

    }

    
}



</style>