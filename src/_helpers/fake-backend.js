function fakeFetch(url, opts) {
  let users = [
    {
      id: 1,
      username: "Test",
      password: "test",
      email: "Test"
    }
  ];
  return new Promise((resolve, reject) => {
    // wrap in timeout to simulate server api call
    setTimeout(() => {
      // authenticate
      if (url.endsWith("/users/authenticate") && opts.method === "POST") {
        // get parameters from post request
        let params = JSON.parse(opts.body);
        let appUsers = params.appUsers;

        // find if any user matches login credentials
        let filteredUsers = appUsers.filter(user => {
          return (
            user.username === params.username &&
            user.password === params.password
          );
        });

        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          let user = filteredUsers[0];
          let responseJson = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            token: "fake-jwt-token"
          };
          resolve({ ok: true, json: () => responseJson });
        } else {
          // else return error
          reject("Username or password is incorrect");
        }

        return;
      }

      if (url.endsWith("/users/signUp") && opts.method === "POST") {
        let params = JSON.parse(opts.body);
        let appUsers = params.appUsers;

        // find if any user matches login credentials
        let filteredUsers = appUsers.filter(user => {
          return user.username === params.username;
        });

        if (filteredUsers.length === 0) {
          // if login details are valid return user details and fake jwt token
          let user = params;
          let responseJson = {
            id: users.length + 1,
            username: user.username,
            email: user.email,
            password: user.password
          };
          resolve({ ok: true, json: () => responseJson });
        } else {
          // else return error
          reject("Username already exist");
        }

        return;
      }

      // get users
      if (url.endsWith("/users") && opts.method === "GET") {
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (
          opts.headers &&
          opts.headers.Authorization === "Bearer fake-jwt-token"
        ) {
          resolve({ ok: true, json: () => users });
        } else {
          // return 401 not authorised if token is null or invalid
          reject("Unauthorised");
        }

        return;
      }
      if (url.endsWith("/feed") && opts.method === "GET") {
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (
          opts.headers &&
          opts.headers.Authorization === "Bearer fake-jwt-token"
        ) {
          resolve({ ok: true, json: () => users });
        } else {
          // return 401 not authorised if token is null or invalid
          reject("Unauthorised");
        }
        console.log("Feeds api call");

        return;
      }

      // pass through any requests not handled above
      realFetch(url, opts).then(response => resolve(response));
    }, 500);
  });
}
export { fakeFetch };
