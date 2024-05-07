<script>

export default {

    name: 'AppProfile',

}

</script>

<template>

    <div id="my-profile">

        <div class="my-photo">
            
        </div>

        <div class="my-name">
            Simone
        </div>

        <div class="my-work">
            Full Stack Developer
        </div>

        <div class="my-location">
            Pesaro, PU
        </div>

        <div class="my-info">
            <div class="my-btn follower">Follower</div>

            <div class="my-btn messagge">Messagge</div>
        </div>

        <div class="my-skills">
            html, css, javascript, mysql, php, laravel
        </div>

        <div class="my-git">
            <a href="https://github.com/simoneditaranto">github</a>
        </div>

    </div>

</template>

<style lang="scss" scoped>

#my-profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;

    padding: 20px 10px;

    border: 1px dotted red;

    .my-photo{
        width: 80px;
        height: 80px;

        border-radius: 50%;

        background-color: green;
        /* test */

        margin-bottom: 20px;
    }

    .my-name{
        font-weight: bold;
    }
    
    .my-work{
        margin-bottom: 10px;

        color: #7C7C7C;
    }

    .my-location{
        margin-bottom: 12px;
    }

    .my-info{
        display: flex;
        gap: 10px;

        margin-bottom: 20px;

        .my-btn{
            width: 120px;

            padding: 5px 0;
            border-radius: 12px;

            text-align: center;

            cursor: pointer;
        }

        .follower{
            background-color: #0156FE;
        }

        .messagge{
            color: black;

            background-color: white;
        }

    }
    
    .my-skills{
        margin-bottom: 10px;
    }
}

</style>