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
        // do afetch here and check creds on the back end

        let url = `./includes/index.php?username=${
          this.input.username
        }&&password=${this.input.password}`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data[0] == false || data[0].length < 0) {
              console.log("Authentication failed, try again");
            } else {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "users" });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("Username and password shouldn't be blank");
      }
    }
  }
};
