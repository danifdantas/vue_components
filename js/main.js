(() => {
  // component will go here
  const HomePageComponent = {
    template: "<h2> You are on the Home Page</h2>"
  };
  const UsersPageComponent = {
    template: "<h2> You are on the Users's Page</h2>"
  };

  const routes = [
    { path: "/", name: "home", component: HomePageComponent },
    { path: "/users", name: "users", component: UsersPageComponent }
  ];

  const router = new VueRouter({
    routes
  });
  const vm = new Vue({
    el: "#app",

    data: {
      message: "sup from vue!"
    },

    created: function() {
      console.log("parent component is live");
    },

    methods: {
      logParent(message) {
        console.log("from the parent", message);
      },
      logMainMessage(message) {
        console.log("called from inside a child, lives in the parent", message);
      }
    },

    components: {
      HomePageComponent: HomePageComponent,
      UsersPageComponent: UsersPageComponent
    },
    router: router
  });
})();
