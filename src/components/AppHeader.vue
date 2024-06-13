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

        }
    },
}

</script>


<template>
    
    <nav>

        <!-- <div class="container"> -->

            <div class="logo">
                <div class="logo-img">
                    <img src="https://images.creativefabrica.com/products/thumbnails/2023/10/11/havUVSr1L/2WbhfYVIk02HuzniXhCdp42Q3De.png" alt="logo">
                </div>
                <div class="name">Simo</div>
            </div>
    
            <div class="links">
    
                <ul class="m-0">
                    <li v-for="link in navLinks">
                        {{ link }}
                    </li>
                </ul>
    
            </div>
    
            <div class="contact-me">
    
                <button class="button-34" role="button">Contact me</button>
    
            </div>

        <!-- </div> -->


    </nav>

</template>

<style scoped lang="scss">

nav {
    background-color: rgba(255, 0, 0, 0.2);
    /* test */

    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

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

        }
    }

    .contact-me{

        /* CSS */
        .button-34 {
        background: #e63e4c;
        border-radius: 999px;
        box-shadow: #e63e4c 0 10px 20px -10px;
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


</style>