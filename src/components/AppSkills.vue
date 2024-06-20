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
               
                  <div class="skill-logo">
                     <img :src="'/images/' + skill.logo" :alt="skill.name">
                  </div>

                  <div class="skill-name">
                     {{ skill.name }}
                  </div>
                  
               </div>

            </div>


        </div>
        
        
    </div>

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#my-skills{
   // background-color: #101010;
    /* test */

    .container{
      background-color: #252525;
      // color: white;
      /* test */

        @include centered;

        padding-top: 50px;
        padding-bottom: 50px;

        .skills-container {
            @include centered;
            flex-wrap: wrap;
            gap: $skills-gap;

            width: 50%;

            .skill{
               @include centered;
               flex-direction: column;

               width: calc(100% / 6 - $skills-gap / 6 * 5);
               aspect-ratio: 1 / 1;
      
               border: 1px solid grey;
               border-radius: 15px;

               transition: all .4s ease;

               .skill-logo{
                  width: 50px;
                  height: 50px;

                  img{
                     width: 100%;
                     height: 100%;
                     object-fit: contain;
                  }
               }

               &:hover{
                  background-color: $primaryColor;
               }
            }

        }


    }

}

</style>