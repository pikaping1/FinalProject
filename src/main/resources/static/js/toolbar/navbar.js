/**
 *
 */

const supplier = Vue.createApp({
  components: {},
  data: function () {
    return {
      isShowAddSupplier: true,
      isShowAddContracts: true,
      isShowLogin: true,
      isShowLogout: false,
    };
  },
  computed: {},
  methods: {
    goAddSuppliers: function () {
      let roleId = localStorage.getItem("RoleId");
      if (roleId == "1") {
        this.isShowAddSupplier = true;
      } else {
        this.isShowAddSupplier = false;
      }
    },
    goAddContracts: function () {
      let roleId = localStorage.getItem("RoleId");
      if (roleId == "1") {
        this.isShowAddContracts = true;
      } else {
        this.isShowAddContracts = false;
      }
    },
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
                window.location.href = "/buyallgoods/";
              },
            });
          } else {
          }
        },
      });
    },
  },
  mounted: function () {
    this.goAddSuppliers();
    this.goAddContracts();
    this.goLogin();

    console.log("navbar.js載入");
  },
});

supplier.mount("#supplier");
