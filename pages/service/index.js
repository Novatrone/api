import Router, { useRouter } from "next/router";

const Apidata = "https://dev.ta3leem.online/api/";

export const login = (mail, password) => {
  const url =
    Apidata + "login?email=" + mail + "&password=" + password + "&lang=en";
  console.log(url);
  fetch(url, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("Token", data.token);
        Router.push("/done");
      } else {
        alert("something went wrong");
      }
      console.log(data);
    });
};
export const getProfile = (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token + "");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  return fetch(Apidata + "profile?lang==en", requestOptions)
    .then((response) => response.json())
    .then((data2) => {
      return data2;
    })
    .catch((error) => console.log("error", error));
};

// export  {login,getProfile}
