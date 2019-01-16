(() => {
  // component will go here
  const liveuser = {
    props: ["first_name", "last_name", "role"],
    template: "#activeuser",

    methods: {
      logChildMsg() {
        console.log("Hello from the child");
      },
      runParentFunc() {
        this.$emit("passfuncallup", "hello from the child on click");
      }
    },
    created: function() {
      console.log("child component is live");
    }
  };

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
      user: liveuser
    }
  });
})();
