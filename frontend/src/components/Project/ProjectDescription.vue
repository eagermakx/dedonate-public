<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        description: String,
        homepage: String,
        gitHubLink: String,
    });
</script>

<template>
    <p class="paragraph text-left">{{ description }}</p>
    <div class="row links">
        <a v-if="homepage" class="link-badge" :href="props.homepage" target="_blank">
            <div class="row align-center just-center">
                <svg viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMinYMin" class="link-logo">
                    <path
                        d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                        stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="font-roboto">
                    {{ props.homepage }}
                </span>
            </div>
        </a>
        <Github :link="props.gitHubLink" />
    </div>
</template>

<script>
import Github from '../svg/Github.vue';

export default {
    name: 'ProjectDescription',
    components: {
        Github
    },
    props: {

    }
}
</script>

<style scoped>
.paragraph {
    max-width: 876px;
}

.links {
    margin-top: 12px;
}

.link-badge {
    border-radius: 50px;
    padding: 3px 12px;
    display: inline-block;
    cursor: pointer;
    max-height: 30px;   
    background-color: #4BB0D0;
    color: #fff;
}

.link-badge .font-roboto {
    font-size: 16px;
    margin-left: 4px;
}

.links .github {
    margin-left: 12px;
}

.link-logo {
    width: 24px;
}
</style>
