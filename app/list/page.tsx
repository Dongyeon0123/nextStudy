import Image from "next/image";
import styles from "./page.module.css";

export default function List() {

  return (
    <div className="App">
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}

// /list 접속 시, page.tsx 보여줌.