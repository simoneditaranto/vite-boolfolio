<script>

import { router } from '../router';
import ContactForm from './ContactForm.vue';


export default {
    name: 'AppFooter',

    components: {
        ContactForm,
    }
}

</script>


<template>

    <footer class="m-0">

        <div class="container">

            <div class="my-footer-top">
                
                <!-- <router-link :to="{name: 'contact-me'}" id="contact-me">Contattami</router-link> -->
                <h2>Contattami</h2>

                <ContactForm></ContactForm>

            </div>

            <div class="my-footer-bottom">

                <small class="m-0">
                    <small>Copyright (c)</small>
                </small>

                <div class="socials">
                    <i class="fa-brands fa-linkedin"></i>
                </div>

            </div>



        </div>

    </footer>

</template>


<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

footer {
    /* test */
    
    padding-top: 20px;
    padding-bottom: 20px;

    .container{
        @include centered;
        flex-direction: column;
        gap: 10px;

        .my-footer-top{
            width: 80%;

            h2{
                
            }
        }

        .my-footer-bottom{
            display: flex;
            gap: 10px;

            // #contact-me{
            //     text-decoration: none;
            
            //     color: white;
            
            //     transition: all .3s ease;
            
            //     &:hover{
            //         background-color: rgba(255, 255, 255, 0.4);
            //     }
            // }

            small{
                font-style: italic;
            }

            .socials{
                i {
                    background-color: white;
                }
            }

        }


    }

}


</style>