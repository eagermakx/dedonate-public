<template>
    <div :class="['badge', 'badge-'+type, size != undefined ? 'badge-'+size : '']">
        <span class="font-lexed">
            {{ text }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "Badge",
        props: {
            type: String,
            text: String,
            size: String,
        }
    }
</script>

<style scoped>
    .badge {
        border-radius: 50px;
        padding: 3px 12px;
        cursor: pointer;
        max-height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .badge span {
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.05em;
    }

    .badge-small {
        max-height: 24px;
        padding: 3px 10px;
    }

    .badge-small span {
        font-size: 14px;
    }

    .badge-succeeded,
    .badge-executed {
        color: var(--green-text-color);
        background-color: var(--green-bg-color);
    }

    .badge-canceled {
        color: var(--red-text-color);
        background-color: var(--red-bg-color);
    }

    .badge-published,
    .badge-pending {
        color: var(--grey-text-color);
        background-color: var(--grey-bg-color);
    }

    .badge-active {
        color: var(--blue-text-color);
        background-color: var(--blue-bg-color);
    }

</style>