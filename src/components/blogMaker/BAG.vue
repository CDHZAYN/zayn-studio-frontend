<template>
  <div id="options">
  </div>
  <div id="main">
    <div id="edit" ref="edit">
      <textarea v-for="(val, index) in textNum" v-model="textContent[index]"
                @focusin="focusingTextIndex=index" @focusout="focusingTextIndex=-1"/>
    </div>
    <div id="lineNo"></div>
    <div id="show" ref="show">
      <div v-for="(val, index) in textNum" :class="{'focusing-text': focusingTextIndex === index}" v-html="renderContent[index]">
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "BAG",
  data() {
    return {
      textHeightList: [],
      textNum: 3,
      textContent: [],
      renderContent: [],
      focusingTextIndex: -1
    }
  },
  watch: {
    textContent: {
      handler(newVal, oldVal) {
        if (newVal === -1)
          return
        this.renderContent[this.focusingTextIndex] = this.textContent[this.focusingTextIndex].replace(/\n/g,'<br/>')
        if (this.$refs.edit.childNodes[this.focusingTextIndex + 1].scrollHeight < this.$refs.show.childNodes[this.focusingTextIndex + 1].scrollHeight)
          this.$refs.edit.childNodes[this.focusingTextIndex + 1].style.height = this.$refs.show.childNodes[this.focusingTextIndex + 1].scrollHeight + 'px'
      },
      deep: true
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      for (let child in this.$refs.edit.childNodes) {
        console.log(child)
        if (child.scrollHeight < this.$refs.show.childNodes[this.focusingTextIndex + 1].scrollHeight)
          child.style.height = this.$refs.show.childNodes[this.focusingTextIndex + 1].scrollHeight + 'px'
        else if (child.scrollHeight > this.$refs.show.childNodes[this.focusingTextIndex + 1].scrollHeight)
          this.$refs.show.childNodes[this.focusingTextIndex + 1].style.height = child.scrollHeight + 'px'
      }
    });
  }
}
</script>

<style scoped>
#options {
  width: 90vw;
  height: 30px;
  background: white;
  box-shadow: 0 0 10px 2px #afafaf;
  margin: 15px 5vw;
  position: sticky;
  top: 2vh;
}

#main {
  display: flex;
  justify-content: space-evenly;
}

#edit {
  /*padding-top: 2px;*/
}

#edit, #show {
  width: 48vw;
  height: 3000px;
  min-height: 66vh;
  background: white;
  /*box-shadow: 0 0 10px 2px #afafaf;*/
}

#edit textarea, #show textarea {
  width: 100%;
  resize: none;
  border: none;
  font-size: 15px;
  padding: 5px;
  line-height: 20px;
  overflow-y: initial;
  min-height: 50px;
  box-sizing: border-box;
  margin: 0;
  display: block;
}

#edit textarea:focus-visible, #show textarea:focus-visible {
  outline: #ffca02 auto 1px;
}

#show > div {
  min-height: 50px;
  width: 100%;
  word-wrap: break-word;
  word-break: normal;
  padding: 10px;
  line-height: 25px;
  box-sizing: border-box;
}

#show .focusing-text {
  border: 1px solid #ffca02;
}

#lineNo {
  width: 10px;
}
</style>