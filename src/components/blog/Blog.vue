<template>
  <div style="height: 3vh"></div>
  <div style="display: flex;">
    <div class="sidebar">
      <div class="back">
        <p class="title">Category</p>
        <span v-for="item in category" :style="{'background-color': item.onSelected? '#0E619E':'#909090'}" @click="onShow(item)">{{ item.name }}</span>
      </div>
      <div class="timeline">
        <p class="title">Timeline</p>
        <p class="nothing" v-show="nothing===0">there's nothing here, please select one or more categories above</p>
        <div v-for="item in timeline" class="article" v-show="nothing!==0">
          <p class="a-time">{{ item.time }}</p>
          <p class="a-title">{{ item.title }}</p>
          <p class="a-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <Article :aid="onShowAid" style="width: 68vw;margin: 0 5vw 0 0;border-radius: 10px;background-color: white"/>
  </div>
</template>

<script>
import Article from "./components/Article.vue";

export default {
  name: "Blog",
  components: {Article},
  data() {
    return {
      nothing: 0,
      category:
          [
            {
              name: 'base',
              onSelected: false,
            },
            {
              name: 'java',
              onSelected: false,
            },
            {
              name: 'album of dead',
              onSelected: false,
            }
          ],
      timeline: [
        {
          aid: 1,
          title: '建站第一篇',
          category: 'base/java/album of dead',
          desc: 'dfsadsfsdfsadasab',
          time: '2002-09-03'
        },
        {
          aid: 2,
          title: '虚拟机？',
          category: 'base/album of dead',
          desc: 'dfsadsfsdfsadasab',
          time: '2002-09-03'
        },
        {
          aid: 3,
          title: 'i guess it doesn\'t work',
          category: 'album of dead',
          desc: 'dfsadsfsdfsadasab',
          time: '2002-09-03'
        }
      ],
      onShowAid: Number
    }
  },
  methods: {
    onShow(item) {
      if (item.onSelected) --this.nothing
      else ++this.nothing
      item.onSelected = !item.onSelected
      // console.log(this.category)
    }
  }

}
</script>

<style scoped>
.nav {
  height: 50px;
  width: 90vw;
  margin: 3vh auto 2vh auto;
  background-color: white;
  border-radius: 10px;
  /*box-shadow: -3px 5px 20px rgba(0, 0, 0, .1);*/
}

.nav span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0 10px 8px;
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  /*background-color: #0E619E;*/
  color: white;
  font-size: 15px;
}

.sidebar {
  margin: 0 2vw 0 5vw;
  width: 20vw;
  background-color: white;
  border-radius: 10px;
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
  font-family: "Tahoma", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: #0E619E;
  color: white;
  font-size: 15px;
}

.sidebar .timeline {
  padding: 1vh 20px 3vh 20px;
  position: relative;
}

.sidebar .timeline .article {
  /*border-left: rgba(14, 97, 158, 0.5) 2px solid;*/
  height: 11vh;
  padding-left: 15px;
}

.sidebar .timeline .article:before {
  content: '';
  background-color: rgba(14, 97, 158, 1);
  height: 12px;
  width: 12px;
  position: absolute;
  left: 20px;
  transform: translate(-40%, 30%);
  border-radius: 10px;
}

.sidebar .timeline .article:after {
  content: '';
  width: 2px;
  height: 11vh;
  background: linear-gradient(to bottom, rgba(14, 97, 158, 0.6) 0%, #0E619E 20%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  left: 20px;
  transform: translate(-20%,-70%);
}

.sidebar .timeline .article p{
  margin: 0;
}

.sidebar .timeline .article .a-time{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: 14px;
  color: rgba(0, 0, 0, .3);
}

.sidebar .timeline .article .a-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0 4px 0;
}

.sidebar .timeline .article .a-desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: 14px;
  color: rgba(0, 0, 0, .7);
}

</style>