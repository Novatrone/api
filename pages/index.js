import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {login} from "./service/index";

export default function Home(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const loginAccount = () => {
    const res = login(mail, password);
    console.log(res, "result");
  };

  return (
    <div>
      <Head>
        <title>Api Testing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          type="mail"
          id="mail"
          name="mail"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" value="login" onClick={loginAccount} />
      </div>
    </div>
  );
}
