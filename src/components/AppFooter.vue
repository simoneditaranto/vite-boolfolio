<script>

import { router } from '../router';


export default {
    name: 'AppFooter',
}

</script>


<template>

    <footer class="m-0">

        <div class="container">

            <p class="m-0">
                <small>Copyright (c)</small>
            </p>

            <router-link :to="{name: 'contact-me'}" id="contact-me">Contattami</router-link>


        </div>

    </footer>

</template>


<style scoped lang="scss">
@use '../styles/mixins' as *;

footer {
    /* test */
    border: 1px dotted white;
    
    padding-top: 20px;
    padding-bottom: 20px;

    .container{
        @include centered;
        gap: 10px;

        #contact-me{
            text-decoration: none;
        
            color: white;
        
            transition: all .3s ease;
        
            &:hover{
                background-color: rgba(255, 255, 255, 0.4);
            }
        }

    }

}


</style>