<template lang="pug">
    transition-group(name="item" tag="ul").user
        user-item(v-for="(user, index) of userList" :userData="user" :key="user.id" :index="index").user__item
</template>

<script>
    import userItem from './user-item';

    export default {
        components: {
            userItem
        },
        props: {
            userList: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        box-sizing: border-box;
        width: 100%;

        padding: 0 10px;
        margin: 0 auto;
    }
</style>