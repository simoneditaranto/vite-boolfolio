<script>
import dayjs from 'dayjs';
import 'dayjs/locale/it';

export default {

    name: 'AppProject',

    props: {
        projectName: String,
        projectDescription: String,
        projectImage: String,
        projectDate: String,
        projectLink: String,
        projectTechnolgies: Array,
        projectType: String,
        project: Object,
    },

    data() {
        return {
            baseApiUrl: 'http://127.0.0.1:8000/storage/',
        }
    },

    methods: {
        formatDate(date) {
            dayjs.locale('it'); // Impostiamo il "locale" in italiano
            return dayjs(date).format('DD/MM/YYYY'); // formattazione italiana della data
        },
    },

}

</script>

<template>

    <!-- <div class="card text-center">
        <img :src="this.baseApiUrl + projectImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold fs-1">{{ projectName }}</h5>

            <div class="desc-container">
                <p class="card-text">{{ projectDescription }}</p>
            </div>

            <div class="card-date">{{ formatDate(projectDate) }}</div>
            <div class="card-link text-info">{{ projectLink }}</div>
            <div class="card-tech text-danger" v-for="tech in projectTechnolgies">{{ tech.title }}</div>
            <div class="card-type text-success">{{ projectType }}</div>
            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">Visualizza</router-link>
        </div>
    </div> -->

    <div class="project-cont">
        <img :src="this.baseApiUrl + projectImage" alt="...">

        <div class="view-project">
            <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">Visualizza</router-link>
        </div>
    </div>
    


</template>

<style lang="scss">

.project-cont{
    position: relative;

    width: calc(100% / 2 - 15px / 2 * 1);

    &:hover .view-project{
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    img{
        width: 100%;
    }

    .view-project{
        display: none;

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(255, 255, 255, 0.3);
    }

}

</style>