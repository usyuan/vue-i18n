<template>
  <div>
    <header>
      <div class="header">
        <div>{{$t("pageTitle")}}</div>
        <div class="left-content">
          <div class="user-name">{{$t("greeting", { name: "Shanie" })}}</div>
          <select name="locale" id="locale" v-model="locale" @change="changeLocale()">
              <option v-for="(itme,index) in langList" :value="itme.value" :label="itme.label" :key="index" />
          </select>
        </div>
      </div>
    </header> 
    <div class="container">
      <!-- <h1>{{$tc("points",0,{ count: 666 })}}</h1> -->      

      <!-- 使用標籤tag -->
      <div class="points">
        <i18n path="points" :tag="false">
          <template v-slot:count>
            <span>666</span>
          </template>
        </i18n>
      </div>
      
      <h2>{{$t("earningPointWay.title")}}</h2>
      <p>{{$t("earningPointWay.describe")}}</p>
      <ul>
        <li v-for="(item,i) in $t('earningPointWay.content')" :key="i">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
  data(){
    return {
      langList: [
        { label: '繁體中文', value: 'zh-TW' },
        { label: 'English', value: 'en' },
      ],
      locale: localStorage.getItem("locale") || "zh-TW"
    }
  },
  methods: {
    changeLocale: function() {
      this.$i18n.locale = this.locale;
      localStorage.setItem("locale", this.locale); //儲存切換的語系
    }
  },
  created() {
    this.$i18n.locale = this.locale;
  }

}
</script>

<!-- <i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n> -->
