<script setup>
import { useSystem } from '../stores/system'
import { tokenToDecimal, formatProjects } from '../utils/helpers/helpers'

import PageHeader from '../components/Headings/PageHeader.vue';
import Button from '../components/Button.vue';
import ProjectsList from '../components/Project/ProjectsList.vue'

const store = useSystem()
const projects = formatProjects(store.orgs);

const search = (searchString) => {

}

</script>

<template>
    <div class="browse-content page-content">
        <PageHeader text="Browse projects" />
        <div class="buttons row">
            <Button title="Search" type="blank"></Button>
        </div>
        <ProjectsList :projects="projects"></ProjectsList>
    </div>
</template>

<style scoped>
.button {
    margin-right: 24px;
    padding: 0 36px;
}

.buttons {
    margin-bottom: 24px;
}

table {
    margin-top: 24px;
}
</style>