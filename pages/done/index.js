import React, { useState } from "react";
import { useEffect } from "react";
import { getProfile } from "../service/index";

export default function index() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const getProfile2 = () => {
    const token = localStorage.getItem("Token");
   getProfile(token).then(res => {
    setName(res.user.email)
    setMail(res.user.bio)
    console.log(res)
  });
  };
  useEffect(() => {
    getProfile2();
  }, []);

  const updateData = () => {
    const token = localStorage.getItem("Token");
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var requestOptions2 = {
      method: "POST",
      headers: myHeaders,
    };
    const url2 =
      "https://dev.ta3leem.online/api/profile/update?full_name=" +
      name +
      "&mobile=810923885400&language=EN&about=About my info&bio=About my bio&ar=qweqwe&category_id=12&gender=Female";
    console.log(url2);
    fetch(url2, requestOptions2)
      .then((res2) => res2.json())
      .then((data3) => console.log(data3, "data3"));
  };

  return (
    <div>
      <h1>Testing Done</h1>
      <h3>Full name</h3>
      <input
        type="text"
        name="name"
        id="name"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <input type="button" value="changename" onClick={() => setName()} /> */}
      <h3>Full name</h3>
      <input
        type="text"
        name="mail"
        id="mail"
        defaultValue={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      {/* <input type="button" value="changemail" onClick={() => setMail()} /> */}
      <div>
        {/* <input type="button" value="updateData" onClick={updateData} /> */}
      </div>
    </div>
  );
}
