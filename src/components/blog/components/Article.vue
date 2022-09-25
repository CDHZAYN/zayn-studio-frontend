<template>

  <div class="html" v-html="html"/>

  <div class="cc">
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      <img alt="知识共享许可协议"
           style="border-width:0;"
           src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"/>
    </a>
    <br/>本作品采用
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
      html: '<h1>哔卟</h1><p>this is a default page. WUH锟斤拷烫烫烫烫烫烫烫烫烫烫烫烫别把热水浇我身上！</p>'
    }
  },
  watch: {
    id: {
      handler(newVal) {
        this.$request.get('/article/getHtml', {
          params: {
            _id: newVal
          }
        }).then((res) => {
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
}

.html>>>blockquote {
  color: rgb(125, 125, 125);
  text-align: center;
  font-style: oblique;
}

.html>>>p,.html>>>li {
  line-height: 25px;
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
  color: #0E619E;
}

.cc a {
  text-decoration: none;
  color: #FFCA02;
}

.cc a img {
  width: 50px;
}

</style>