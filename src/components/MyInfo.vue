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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad incidunt, accusamus tempore nobis consequatur odit ratione facilis at quam nemo sequi aut asperiores ea fugiat officia rem nam necessitatibus quisquam.</p>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../styles/mixins' as *;

#my-info{
    @include centered;
    
    padding-top: 50px;
    padding-bottom: 50px;

    border: 2px dotted red;

    .container{
        display: flex;
        align-items: center;
        gap: 30px;

        width: 50%;
    
        .my-photo {
            background-color: gold;
            /* test */
    
            width: 200px;
            height: 200px;
    
            border-radius: 50%;
        }
    
        .my-desc{
            width: 70%;
        }
    
    }

}


</style>