// import components
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
const routes = [
  { path: "/", redirect: { name: "login" } },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/users", name: "users", component: UsersComponent }
];

const router = new VueRouter({
  routes
});
const vm = new Vue({
  // el: "#app",

  data: {
    message: "sup from vue!",
    authenticated: false,

    mockAccount: {
      username: "danidantas",
      password: "123"
    }
  },

  created: function() {
    console.log("parent component is live");
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  },

  router: router
}).$mount("#app");

// make the router check all of the routes and bounce back if we are not authenticated
router.beforeEach((to, from, next) => {
  console.log("router guard working!");
  if (vm.authenticated === false) {
    next("/login");
  } else {
    next();
  }
});
