import { toast } from "react-toastify";

export function singIn(username, password) {
  return fetch("/auth/token/login/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      console.log(response);

      // if its success
      if (response.ok) {
        return response.json();
      }

      // otherwise error
      return response
        .json()
        .then((json) => {
          // handle json error response by server
          if (response.status === 400) {
            const errors = Object.keys(json).map(
              (k) => ` ${json[k].join(" ")}`
            );
            throw new Error(errors.join(" "));
          }
          throw new Error(JSON.stringify(json));
        })
        .catch((e) => {
          if (e.name === "SyntaxError") {
            throw new Error(response.statusText);
          }
          throw new Error(e);
        });
    })
    .then((json) => {
      // call api successfully
      toast(JSON.stringify(json), { type: "success" });
    })
    .catch((e) => {
      // handle all error
      toast(e.message, { type: "error" });
    });
}
