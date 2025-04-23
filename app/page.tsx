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

// Next.js는 불편하게 라우팅 할 필요 없이,
// 파일, 폴더 하나 만들면 라우팅 끝임.

// next.js에서 라우팅 하고싶으면,
// app 폴더 안에 폴더 만들고,
// 그 안에 page. 파일 넣으면 끝
// 그 후에는 /폴더이름으로 접속하면 됨.