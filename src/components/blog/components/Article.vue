<template>

  <div class="html" v-html="html"/>

  <div class="cc">
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      <img alt="知识共享许可协议"
           style="border-width:0;"
           src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"/>
    </a>
    <br/>本网站博客遵守
    <a
        rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享
      4.0 国际许可协议</a>
    进行许可。
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    id: String
  },
  data() {
    return {
      html: '<h1>哔卟</h1><p>This is a default page. WUH锟斤拷烫烫烫烫烫烫烫烫烫烫烫烫别把热水浇我身上！</p>'
    }
  },
  watch: {
    id: {
      handler(newVal) {
        console.log(newVal)
        this.html = '<h1>Loading!</h1><blockquote><p>Please wait...</p></blockquote>'
        this.$request.get('/article/getHtml', {
          params: {
            _id: newVal
          }
        }).then((res) => {
              console.log(res.msg)
              this.html = res.msg.html
            }
        )
      }
    }
  },
}
</script>

<style scoped>

.html>>>h1 {
  text-align: center;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
}

.html>>>blockquote {
  color: rgb(125, 125, 125);
  text-align: center;
  font-style: oblique;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
}

.html>>>p,.html>>>li {
  line-height: 25px;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
}

.html>>>.img-wrapper {
  text-align: center;
}

.html>>>.img-wrapper img {
  width: 100%;
}

.cc {
  margin-top: 30px;
  text-align: center;
  font-size: 13px;
  color: black;
}

.cc a {
  text-decoration: none;
  color: #0E619E;
  font-weight: bold;
  font-family: Montserrat, PingFang SC, Microsoft YaHei, Arial, sans-serif;
}

.cc a img {
  width: 50px;
}

</style>