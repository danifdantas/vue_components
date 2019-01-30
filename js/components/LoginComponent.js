// everything inside of export default will be accecible  to the buil, it will be public
export default {
  template: `
<div id ="login">
  <h1>Log In</h1>
  <form>
  <input type="text" name="username" autocomplete="username" v-model="input.username" placeholder="user name">
  <input type="password" name="password" autocomplete="current-password" v-model="input.password" placeholder="password">
  <button type="button" v-on:click="login()">Log In!</button>
  </form>
  </div>
`,

  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      // console.log("Trying to Login");
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.password === this.$parent.mockAccount.password) {
          console.log("You are logged in!");
          this.$emit("authenticated", true);
          this.$router.replace({ name: "users" });
        } else {
          console.log("Log in Failed");
        }
      } else {
        console.log("Username and password shouldn't be blank");
      }
    }
  }
};
