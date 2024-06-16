<script setup>
     import { defineProps } from 'vue';

    import TableRow from '../Table/TableRow.vue';
    import TableColumn from '../Table/TableColumn.vue';
    import Github from '../svg/Github.vue';
    import Status from '../Status/Status.vue';

    import projectColumns from '../../utils/columns/project';

    const props = defineProps(
        {
            projects: Array
        }
    )

    const columns = projectColumns

</script>


<template>
    <div class="rows-list">
        <TableColumn v-if="props.projects.length > 0" :columns="columns" class="project"/>
        <TableRow v-for="project in props.projects" class="project project-row">
            <router-link class="text-link" :to="{name: 'project', params: {project: project.address}}">
                <span class="table-text font-roboto">{{ project.title }}</span>
            </router-link>
            <router-link class="text-link" :to="{name: 'project', params: {project: project.address}}">
                <span class="table-text font-roboto">{{ project.teamCount }}</span>
            </router-link>
            <Github :link="project.github" class="text-center"/>
            <router-link class="text-link" :to="{name: 'project', params: {project: project.address}}">
                <span class="table-text font-roboto"> {{ project.donationsTotal }}/{{ project.donationsGoal }} </span>
                <span class="table-text font-roboto table-text-small">&nbsp; spUSD</span>
            </router-link>
            <router-link class="text-link" :to="{name: 'project', params: {project: project.address}}">
                <Status :type="project.fundStatus" state="active"/>
            </router-link>
        </TableRow>
    </div>
</template>

<style scoped>
    .rows-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
    }

    .project {
        padding: 0 16px;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr 2fr 2fr 2fr;
    }

    .project-row {
        align-items: center;
        text-align: left;
        margin-bottom: 25px;
    }

    .rows-list_row-content {
        height: 60px;
        width: 100%;
        background: var(--table-row-bg);
        border-radius: 8px;
    }

    .table-text {
        color: var(--cream-primary);
        font-weight: 400;
        font-size: 18px;
    }

    .table-text-small { 
        font-size: 16px;
    }
</style>