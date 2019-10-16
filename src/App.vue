<template lang="pug">
  #app
    .controls
      .controls__block
        p.controls__text рейтинг 
        button(type="button" v-bind:class="flagRating ? 'active' : ''" @click="getSortedRating").controls__btn
          include ./assets/img/arr-top-icon.svg
      .controls__block
        p.controls__text возраст 
        button(type="button" v-bind:class="flagAge ? 'active' : ''" @click="getSortedAge").controls__btn
          include ./assets/img/arr-top-icon.svg
      .controls__block.controls__block--search
        h3.controls__title Рейтинг пользователей
        button(type="button" @click="onClickToggleSearch").controls__btn.controls__btn--search
          include ./assets/img/search-icon.svg  
        input(type="text" v-model="input" placeholder="Иван Иванов" v-show="searcAtive").controls__input 
    user-list(:userList="filtredList").list
    loader(v-if="loading")
</template>

<script>
import {mapGetters} from 'vuex';
import {getSortArr} from '@/assets/js/utils.js'
import userList from './components/user/user-list'
import loader from './components/loader'

export default {
  name: 'app',
  components: {
    userList, loader
  },
  data() {
    return {
      flagRating: true,
      flagAge: false,
      searcAtive: false,
      input: '',
    }
  },
  methods: {
    onClickToggleSearch() {
      this.searcAtive = !this.searcAtive;
    },
    getSortedRating() {
      this.flagRating = !this.flagRating;
      getSortArr(this.userList, 'rating', this.flagRating)
    },
    getSortedAge() {
      this.flagAge = !this.flagAge;
      getSortArr(this.userList, 'age', this.flagAge)
    },
  },
  created() {
    this.$store.dispatch('getUsersList');
  },
  computed: {
    ...mapGetters(['userList', 'loading']),
    filtredList() {
      const query = this.input.toLowerCase();
      return this.userList.filter(user => {
        return user.name.toLowerCase().includes(query) ||
               user.secondName.toLowerCase().includes(query)
      })
    }
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/main.scss"; 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0 auto;
  max-width: 500px;

  .controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    padding: 0 10px;
    margin: 20px 0;

    &__block {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 0 10px 10px 0;

      &--search {
        flex-direction: row;
        flex-wrap: wrap;

        width: 100%;
        margin-right: 10px;
      }
    }

    &__title {
      margin-right: auto;
    }

    &__text {
      display: block;
      margin: 0 5px 0 0;
    }

    &__input {
      width: 300px;
      padding: 10px 5px;
      margin: 0 auto;

      border: 1px solid #ececec;
      border-radius: 10px;
      outline: none;

      &:hover,
      &:focus {
        border-color: #409eff;
      }

      &::placeholder {
        color: #ececec;
      }
    }

    &__btn {
      box-sizing: border-box;
      width: 30px;
      height: 30px;

			background-color: transparent;
			border: 1px solid #ececec;
      border-radius: 5px;

      outline: none;

      &:hover,
      &:focus {
        border-color: #409eff;
      }

      &--search {
        border: none;

        &:hover,
        &:focus {
          .search-icon {
            fill: #409eff;
          }
        }
      }
      
      &.active {
				.arr-top {
					transform: rotate(180deg);
					transition: all 0.6s;
				}
			}
    }
  }

  .search-icon {
    width: 20px; 
    height: 20px;
  }

  .arr-top {
		width: 12px;
    height: 12px;
    
		transform: rotate(0);
	  transition: all 0.6s;
	}
}
</style>
