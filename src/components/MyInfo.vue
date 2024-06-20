<script>

export default {

    name: 'MyInfo',

}
</script>

<template>
     
    <div id="my-info" >

        <div class="container">
            
            <div class="my-photo">

            </div>

            <div class="my-desc">
                
                <i class="fa-solid fa-quote-right"></i>
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla debitis distinctio excepturi quos pariatur eum a. Laboriosam aut ducimus magnam minima accusamus delectus beatae, vel quae impedit totam? Consequuntur, eveniet.</p>

            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#my-info{
    background-color: #101010;
    color: white;
    /* test */

    padding-top: 50px;
    padding-bottom: 50px;

    .container{
        // display: flex;
        // align-items: center;
        @include centered;

        width: 50%;
    
        .my-photo {
            background-color: $primaryColor;
            /* test */
    
            width: 250px;
            height: 250px;
        }
    
        .my-desc{
            padding: 20px;
            border: 1px solid $primaryColor;
            border-radius: 10px;
            /* test */

            width: 70%;

            .fa-quote-right{
                font-size: 2.5em;

                color: $primaryColor;
            }
        }
    
    }

}


</style>