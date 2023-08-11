<template>
  <div style="height: 3vh"></div>
  <div style="display: flex;">
    <div class="sidebar">
      <div class="glass">
        <div class="back">
          <p class="title">Category</p>
          <span v-for="item in category"
                :style="{'background-color': this.categorySelected.indexOf(item)!==-1? '#0E619E':'#909090'}"
                @click="changeState(item)">{{ item }}</span>
        </div>
        <div class="timeline">
          <p class="title">Timeline</p>
          <p class="nothing" v-show="articleSelected.length===0">Here's nothing, please select one or more
            categories above.</p>
          <div v-for="item in articleSelected" class="article-profile" v-show="categorySelected.length!==0"
               @click="onShowId = item._id" :data-height-is-short="onShowId!==item._id">
            <p class="a-time" v-show="onShowId===item._id">{{ item.time }}</p>
            <p class="a-title">{{ item.title }}</p>
            <p class="a-desc" v-show="onShowId===item._id">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <Article :id="onShowId"/>
    </div>
  </div>
</template>

<script>
import Article from "./components/Article.vue";

export default {
  name: "Blog",
  components: {Article},
  data() {
    return {
      test: false,
      category: [
        'the first',
        'base',
        'CC',
        'BI',
        'D&BMI',
        'OS',
        'NJU 2022FALL',
        'album of dead',
      ],
      categorySelected: [],
      article: Array,
      articleSelected: [],
      onShowId: String
    }
  },
  methods: {
    changeState(item) {
      let categorySelected = this.categorySelected
      let articleSelected = this.articleSelected
      if (categorySelected.indexOf(item) !== -1) {
        categorySelected.splice(categorySelected.indexOf(item), 1)
        this.articleSelected = articleSelected.filter(e => {
          let flag = false
          e.category.forEach(ee => {
            if (ee === item)
              return
            if (categorySelected.indexOf(ee) !== -1)
              flag = true
          })
          return flag
        })
      } else {
        categorySelected.push(item)
        let insertIndex = 0
        this.article.forEach(e => {
          if (e.category.indexOf(item) !== -1 && articleSelected.indexOf(e) === -1) {
            if (articleSelected.length === 0)
              articleSelected.push(e)
            else {
              while (insertIndex < articleSelected.length
              && e._id.slice(0, 8) < articleSelected.at(insertIndex)._id.slice(0, 8))
                ++insertIndex
              articleSelected.splice(insertIndex, 0, e)
            }
          }
        })
        console.log(articleSelected)
      }
    }
  },
  created() {
    this.$request.get('/article/getAll').then((res) => {
          this.article = res.msg;
          this.article.forEach(e => {
            let str = e._id.slice(0, 8)
            // console.log(typeof e._id, e._id)
            let date = new Date(Number(parseInt(str, 16).toString() * 1000));
            e.time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
          })
        }
    )
  }

}
</script>

<style scoped>
.nav {
  height: 50px;
  width: 90vw;
  margin: 3vh auto 2vh auto;
  background-color: white;
  /*border-radius: 10px;*/
  /*box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);*/
}

.nav span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0 10px 8px;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
  /*background-color: #0E619E;*/
  color: white;
  font-size: 15px;
}

.sidebar {
  margin: 0 2vw 0 5vw;
  width: 20vw;
  max-height: 80vh;
  background-color: white;
  /*border-radius: 10px;*/
  /*overflow-x: hidden;*/
  overflow-y: scroll;
  box-sizing: border-box;
}

.sidebar::-webkit-scrollbar {
  width: 5px;
  background-color: yellow;
}

.sidebar::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: white;
}

.sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgba(14, 97, 158, 0.6);
}

.sidebar .back {
  padding: 1vh 20px 1vh 20px;
}

.sidebar .title {
  font-size: 18px;
  margin-top: 2vh;
  margin-bottom: 1vh;
}

.sidebar .nothing {
  font-size: 15px;
  margin-top: 2vh;
  margin-bottom: 1vh;
  color: rgba(0, 0, 0, .5);
}

.sidebar .back span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 8px 0 0;
  /*font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;*/
  background-color: #0E619E;
  color: white;
  font-size: 15px;
}

.sidebar .timeline {
  padding: 1vh 20px 3vh 20px;
  position: relative;
}

.sidebar .timeline .article-profile {
  /*border-left: rgba(14, 97, 158, 0.5) 2px solid;*/
  display: block;
  height: 30px;
  padding-left: 15px;
  width: 15vw;
  background: none;
}

.sidebar .timeline .article-profile[data-height-is-short=true] {
  height: 30px;
}

.sidebar .timeline .article-profile[data-height-is-short=false] {
  height: 80px;
}

.sidebar .timeline .article-profile:before {
  content: '';
  background-color: rgba(14, 97, 158, 1);
  height: 12px;
  width: 12px;
  position: absolute;
  left: 20px;
  transform: translate(-40%, 30%);
  border-radius: 10px;
}

.sidebar .timeline .article-profile::after {
  content: '';
  width: 2px;
  background: linear-gradient(to bottom, rgba(14, 97, 158, 0.6) 0%, #0E619E 20%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  left: 20px;
  transform: translate(-20%, -70%);
}

.sidebar .timeline .article-profile[data-height-is-short=true]::after {
  height: 30px;
}

.sidebar .timeline .article-profile[data-height-is-short=false]::after {
  height: 90px;
}

.sidebar .timeline .article-profile p {
  margin: 0;
}

.sidebar .timeline .article-profile .a-time {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: rgba(0, 0, 0, .3);
}

.sidebar .timeline .article-profile .a-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0 4px 0;
}

.sidebar .timeline .article-profile .a-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: rgba(0, 0, 0, .7);
}

.article {
  width: 68vw;
  margin: 0 5vw 0 0;
  padding: 25px 35px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
}

.glass {
  box-shadow: -2px 2px 8px rgba(0, 0, 0, .3), inset -2px 2px 10px rgba(0, 0, 0, .1);
  border: 1px solid;
  border-image: linear-gradient(to left bottom, rgba(0, 0, 0, .1) 30%, rgba(14, 97, 158, 0) 40%, rgba(14, 97, 158, 0.8) 100%) 20 20;
  background-image: linear-gradient(to left bottom, rgb(14, 97, 158, 0.1) 0%, rgb(255, 255, 255, 0.025) 10%, rgb(255, 255, 255, 0.05) 80%, rgba(14, 97, 158, 0.15) 100%);
  /*text-shadow: -2px 2px 3px rgba(0, 0, 0, .15);*/
}

</style>