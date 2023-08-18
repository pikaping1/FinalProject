/**
 *
 */

const supplier = Vue.createApp({
  components: {},
  data: function () {
    return {
        isShowAddSupplier:true,
        isShowAddContracts:true
    };
  },
  computed: {},
  methods: {
    goAddSuppliers: function () {
      let roleId = localStorage.getItem("RoleId");
      if (roleId == "1") {
        this.isShowAddSupplier=true
      } else {
        this.isShowAddSupplier=false
      }
    },
    goAddContracts: function () {
        let roleId = localStorage.getItem("RoleId");
        if (roleId == "1") {
          this.isShowAddContracts=true
        } else {
          this.isShowAddContracts=false
        }
      },
  },
  mounted: function () {
    this.goAddSuppliers();
    this.goAddContracts();

    console.log("navbar.js載入")
  },
});

supplier.mount("#supplier");
