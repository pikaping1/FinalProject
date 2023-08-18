/**
 *
 */

const supplier = Vue.createApp({
  components: {},
  data: function () {
    return {
      isShowAddSupplier: false,
      isShowAddContracts: false,

    };
  },
  computed: {},
  methods: {
    goAddSuppliers: function () {
      let roleId = localStorage.getItem("RoleId");
      if (roleId === '1') {
        this.isShowAddSupplier = true;
      } else {
        this.isShowAddSupplier = false;
      }
    },
    goAddContracts: function () {
      let roleId = localStorage.getItem("RoleId");
      if (roleId === '1') {
        this.isShowAddContracts = true;
      } else {
        this.isShowAddContracts = false;
      }
    },
    
  },
  mounted: function () {
    this.goAddSuppliers();
    this.goAddContracts();
  },
});

supplier.mount("#supplier");

/**
 *
 */

const login = Vue.createApp({
  components: {},
  data: function () {
    return {
      isShowLogin: true,
      isShowLogout: false,
    };
  },
  computed: {},
  methods: {
      goLogin: function () {
      let userName = localStorage.getItem("UserName");
      if (userName === null) {
        this.isShowLogin = true;
        this.isShowLogout = false;
      } else {
        this.isShowLogin = false;
        this.isShowLogout = true;
      }
    },
    logout: function () {
      console.log("登出!!!!!!!!!!!!")
      bootbox.confirm({
        title: "再次確認！",
        message: '<div class="text-center">' + "確定要登出嗎？" + "</div>",
        buttons: {
          confirm: {
            label: "我要登出",
            className: "btn-danger",
          },
          cancel: {
            label: "繼續購物",
            className: "btn-success",
          },
        },
        callback: function (result) {
          //確認就往下修改
          if (result) {
            localStorage.clear();
            bootbox.alert({
              message:
                '<div class="text-center">登出成功，歡迎再次使用٩(●˙▿˙●)۶…⋆ฺ</div>',
              buttons: {
                ok: { label: "關閉", className: "btn btn-warning" },
              },
              callback: function () {
                const url = contextPath + "/";
                window.location.href = url;
              },
            });
          } else {
          }
        },
      });
    },
  },
  mounted: function () {
    this.goLogin();

  },
});

login.mount("#login");
