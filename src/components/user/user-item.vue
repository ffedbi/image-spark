<template lang="pug">
    li.item
        .item__index {{ index + 1 }}
        .item__img
            img(src="https://ipsumimage.appspot.com/90x90" :alt="`${userData.name} ${userData.secondName}`")
        .item__info
            h4.item__name {{ userData.name }} {{ userData.secondName }}
            .item__age {{ userData.age }} {{getCorrectAge}}
        .item__score
            strong {{ userData.rating }} 
            | {{ getCorrectScore }}
</template>

<script>
    import {declOfNum} from '@/assets/js/utils.js'

    const arrayDeclRating = ['балл', 'балла', 'баллов'];
    const arrayDeclAges = ['год', 'года', 'лет'];

    export default {
        props: {
            userData: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: false
            }
        },
        computed: {
            getCorrectAge() {
                return declOfNum(this.userData.age, arrayDeclAges)
            },
            getCorrectScore() {
                return declOfNum(this.userData.rating, arrayDeclRating)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);

        &__img {
            width: 60px;
            height: 60px;
            border-radius: 50%;

            background-position: center;
            background-size: contain;
            overflow: hidden;

            @media ($tablet) {
                width: 90px;
                height: 90px;
            }
        }

        &:nth-child(1) {
            .item__img {
                box-shadow: 0 2px 22px 0 $gold-bg;
            }
        }

        &:nth-child(2) {
            .item__img {
                box-shadow: 0 2px 22px 0 $silver-bg;
            }
        }

        &:nth-child(3) {
            .item__img {
                box-shadow: 0 2px 22px 0 $broze-bg;
            }
        }

        &__name {
            margin: 0;
        }

        &__score {
            width: 50px;
            text-align: left;

            strong {
                font-size: 16px;
            }

            font-size: 12px;
        }

    }
</style>