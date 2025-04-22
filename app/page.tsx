import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  let name :string = 'lee'
  let age :number = 25
  let link :string = 'http://google.com'

  return (
    <div className="App">
      <h4 className="title">애플후레시 { age }</h4>
      <p className="title-sub">by dev { name }</p>
      <a href={ link }>링크</a>
    </div>
  );
}
