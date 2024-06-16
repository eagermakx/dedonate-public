<template>
    <a target="_blank" :href="url" class="document-block">
        <div class="document-icon">
            <svg viewBox="0 0 47 63" fill="none" preserveAspectRatio="xMinYMin">
                <path d="M6 7H41M6 12H41M6 17H41M6 22H41M6 27H41M6 32H41M6 37H41M6 42H41M6 47H41M6 52H31M4 1H43C44.6569 1 46 2.34815 46 4.005V51.3013C46 52.0689 45.7058 52.8106 45.1779 53.3678L37.8875 61.0632C37.3209 61.6613 36.5334 62 35.7096 62H4C2.34315 62 1 60.6569 1 59V4C1 2.34315 2.34315 1 4 1Z" stroke="white" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="document-title font-roboto">{{ title }}</div> 
    </a>
</template>

<script>
    export default {
        name: 'Document',
        props: {
            title: String,
            url: String,
        }
    }
</script>

<style scoped>
    .document-block {
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 8px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        transition: all 0.3s ease;
    }

    .document-block:hover {
        background-color: #39383A;
    }

    .document-icon {
        width: 33px;
        height: 45px;
        margin-bottom: 7px;
    }

    .document-icon svg {
        width: 100%;
    }

    .document-title {
        max-width: 68px;
        overflow: hidden;
        text-wrap: wrap;
        text-overflow: ellipsis;
        display: inline-block;


        color: #fff;
        font-size: 12px;
    }
</style>