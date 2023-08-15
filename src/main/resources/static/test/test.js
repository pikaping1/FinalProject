/**
 *
 */
const app = Vue.createApp({
    components: {},
    data: function () {
      return {
        membersAllData:[],
        membersId:"",
      };
    },
    methods: {
     
      //查詢全部的廠商有哪些，for廠商名稱的填寫欄位
      test: function () {
        let pika = this;
        axios
          .post(contextPath + "/members/findMembersByIdForAddS")
          .then(function (response) {
            console.log("members",response);
 
            pika.membersAllData = response.data;
            pika.membersId=pika.membersAllData.membersId;

            console.log("membersId",pika.membersId);
          })
          .catch(function () {})
          .finally(function () {});
      },
  
 
    },
    mounted: function () {
      console.log("test");
      this.test();
    },
  });
  
  app.mount("#app");
  