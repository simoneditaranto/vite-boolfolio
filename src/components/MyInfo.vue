<script>

export default {

    name: 'MyInfo',

}



</script>

<template>
     
    <div class="container">

        <div id="my-info">
            
            <div class="my-photo">

            </div>
            <div class="my-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad incidunt, accusamus tempore nobis consequatur odit ratione facilis at quam nemo sequi aut asperiores ea fugiat officia rem nam necessitatibus quisquam.</p>
            </div>

        </div>

</div>

</template>

<style scoped lang="scss">

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    
    #my-info{
        display: flex;
        align-items: center;
        gap: 30px;

        width: 70%;

        border: 2px dotted red;
    
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