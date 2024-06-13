<script>

import AppProject from '../components/AppProject.vue';
// import AppProfile from '../components/AppProfile.vue';

import axios from 'axios';

export default {

    name: 'HomePage',

   components: { 
      AppProject,
    //   AppProfile,
   },

    data() {
        return {
            projects: [],

            // link ai vari endpoint dell'api per vedere le varie pagine dei post
            apiLinks: [],

            // variabile che tiene traccia della pagina corrente
            // per la chiamata api
            apiPageNumber: 1,

            // variabile per il loader
            isLoading: true,

            baseApiUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {

        this.apiCall();
    },

    methods: {

        apiCall() {
            // implementiamo il loader anche qui
            // impostiamo la variabile isLoading a true
            this.isLoading = true;

            axios.get(this.baseApiUrl + '/projects', {
            params: {
                page: this.apiPageNumber, 
            } 
            }).then(res => {

                // solo quando riceviamo una risposta di successo
                if(res.data.success) {
                // impostiamo isLoading a false
                this.isLoading = false;
                }

                // console.log(res);

                this.projects = res.data.result.data;

                this.apiLinks = res.data.result.links;

            })
        },

        changeApiPage(pageNumber) {
            // console.log(pageNumber);
            if(pageNumber == '&laquo; Previous') {

                this.apiPageNumber = Number(this.apiPageNumber) - 1;

            } else if(pageNumber == 'Next &raquo;'){

                this.apiPageNumber = Number(this.apiPageNumber) + 1;

            } else {
                
                this.apiPageNumber = pageNumber;

            }

            this.apiCall();
        },
    },
}
</script>

<template>
    
    <div id="home">

        <div class="container">

            <!-- <AppProfile></AppProfile> -->
    
            <div class="title">Projects</div>
            
            <div v-if="!isLoading">
                <div class="my-projects">
                        <AppProject 
                        v-for="currentProject in projects"
                        :key="currentProject.slug"
                        :project="currentProject"
                        :projectName="currentProject.name"
                        :projectDescription="currentProject.description"
                        :projectImage="currentProject.project_image"
                        :projectDate="currentProject.project_date"
                        :projectLink="currentProject.link_github"
                        :projectTechnolgies="currentProject.technologies"
                        :projectType="currentProject.type.title"
                        >
                        </AppProject>
                </div>
    
                <div class="pages">
                    <ul>
                        <li v-html="apiLinks[0].label" 
                            :class="apiPageNumber == 1 ? 'none' : ''"
                            @click="changeApiPage(apiLinks[0].label)"
                            >
                        </li>
                        <li 
                            v-for="link in apiLinks.slice(1, -1)"
                            v-html="link.label" 
                            @click="changeApiPage(link.label)" 
                            v-bind:class="{ 'active' : link.label == apiPageNumber }"
                            >
                        </li>
                        <li v-html="apiLinks[apiLinks.length - 1].label" 
                            :class="apiPageNumber == apiLinks.length - 2 ? 'none' : ''"
                            @click="changeApiPage(apiLinks[apiLinks.length - 1].label)"
                            >
                        </li>
                    </ul>
                </div>
    
            </div>
            <div v-else>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>


        </div>

   </div>

</template>

<style lang="scss">
@use '../styles/mixins' as *;

#home{
    border: 2px dotted blueviolet;
    /* test */ 

    padding-top: 50px;
    padding-bottom: 50px;

    .container{

        .my-projects{
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            
            margin-bottom: 20px;
        }

        .pages {
        
            ul {
                @include centered;
                gap: 10px;
                margin: 0;
                padding: 0;

        
                list-style-type: none;
    
                li {
                    padding: 8px;
        
                    transition: all .3s ease;
        
                    cursor: pointer;
        
                    &:hover, &.active{
                        background-color: rgba(255, 255, 255, 0.4);
                    }
        
                    &.none {
                        display: none;
                    }
                }
            }
           
        }

    }

}

</style>
