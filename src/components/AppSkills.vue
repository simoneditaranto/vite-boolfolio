<script>

export default {

    name: 'AppSkills',

    data() {
        return {
            skills: [
            {
               name: 'HTML',
               logo: 'html.png',
            },
            {
               name: 'CSS',
               logo: 'css.png',
            },
            {
               name: 'JavaScript',
               logo: 'js.png',
            },
            {
               name: 'VueJS',
               logo: 'vueJS.png',
            },
            {
               name: 'Vite',
               logo: 'vite.png',
            },
            {
               name: 'boostrap',
               logo: 'bootstrap.png',
            },
            {
               name: 'C',
               logo: 'c.png',
            },
            {
               name: 'Java',
               logo: 'java.png',
            },
            {
               name: 'Laravel',
               logo: 'laravel.png',
            },
            {
               name: 'MySQL',
               logo: 'mysql.png',
            },
            {
               name: 'GitHub',
               logo: 'github.png',
            },
            {
               name: 'PHP',
               logo: 'php.png',
            },
        ],
        }
    }

}

</script>

<template>

    <div id="my-skills">

        <div class="container">

            <div class="skills-container">

                <div class="skill" v-for="skill in skills">
    
                </div>

            </div>


        </div>
        
        
    </div>

</template>

<style scoped lang="scss">
@use '../styles/mixins' as *;

#my-skills{
    border: 2px dotted red;
    /* test */

    .container{
        @include centered;

        padding-top: 50px;
        padding-bottom: 50px;

        .skills-container {
            @include centered;

            width: 50%;

            .skill{
                width: 50px;
                height: 50px;
        
                border: 1px solid grey;
        
                background-color: white;
            }

        }


    }

}

</style>