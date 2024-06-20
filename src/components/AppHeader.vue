<script>

export default {
    name: 'AppHeader',

    data() {
        return {

            navLinks: [
                'Chi sono', 
                'Skills',
                'Portfolio',
                'About me',
                'Dove mi trovi',
            ],

            actualLink: 0,

        }
    },

    methods: {

        changeActualLink(index) {
            this.actualLink = index;
        },

    },
}

</script>


<template>
    
    <nav>

        <div class="container">

            <div class="logo">
                <div class="logo-img">
                    <img src="https://images.creativefabrica.com/products/thumbnails/2023/10/11/havUVSr1L/2WbhfYVIk02HuzniXhCdp42Q3De.png" alt="logo">
                </div>
                <div class="name">Simo</div>
            </div>
    
            <div class="links">
    
                <ul class="m-0">
                    <li 
                        v-for="(link, index) in navLinks" 
                        @click="changeActualLink(index)" 
                        :class="actualLink == index ? 'clicked' : ''"
                        >
                        <a href="#">{{ link }}</a>
                    </li>
                </ul>
    
            </div>
    
            <div class="contact-me">
    
                <button class="button-34" role="button">Contact me</button>
    
            </div>

        </div>


    </nav>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

nav {
    // background-color: rgba(255, 0, 0, 0.2);
    // background-color: #101010;
    // padding: 20px 0;
    /* test */

    
    .container {
        // color: white;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px;

        .logo{
            display: flex;
            align-items: center;
    
            .logo-img{
                width: 50px;
                height: 50px;
    
                img{
                    width: 100%;
                    height: 100%;
                }
            }
    
        }
    
        .links{
    
            ul{
                display: flex;
                gap: 20px;
    
                list-style-type: none;
    
                li {
                    cursor: pointer;
    
                    transition: all .4s ease;
    
                    a{
                        text-decoration: none;
    
                        color: white;

                        transition: all .3s ease;

                        &:hover{
                            color: $primaryColor;
                        }
                    }
                }
    
                li.clicked {
                    border-bottom: 1px solid $primaryColor;
                }
    
            }
        }
    
        .contact-me{
    
            /* CSS */
            .button-34 {
            background: $primaryColor;
            border-radius: 999px;
            box-shadow: $primaryColor 0 10px 20px -10px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            opacity: 1;
            outline: 0 solid transparent;
            padding: 8px 18px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: fit-content;
            word-break: break-word;
            border: 0;
            }
    
        }

    }

}


</style>