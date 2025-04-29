'use client'

import Image from "next/image";
import styles from "./page.module.css";
import 작명 from "/public/food0.png"
import { useState } from "react"

export default function List(): JSX.Element {

    let 상품 :string[] = ['Tomatoes', 'Pasta', 'Coconut']

    let a :(string | number)[] = [20, 30, 'hello']
    console.log(a[1])

    let [수량, 수량변경] = useState<number[]>([0, 0, 0]);

  return (
    <div className="App">
      <h4 className="title">상품목록</h4>

      {/* <div className="food">
        <h4>{상품[0]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[3]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[4]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[5]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[6]} $40</h4>
      </div> */}

        {
          상품.map((item :string, i :number ) :JSX.Element => {
            return (
            <div className="food" key={i}>
                <img src={`food${i}.png`} className="food-img" alt="토마토" />
                {/* lazy loading, 사이즈 최적화, layout-shift 방지 */}
                {/* 근데 최적화는 보통 다 만들고 난 다음에 하는게 좋음 */}
                <h4>{상품[i]} $40</h4>
                <span> {수량[i]} </span>
                <button onClick={() => {
                  let copy수량 :number[] = [...수량];
                  copy수량[i] += 1;
                  수량변경(copy수량);
                }}>+</button>
                <button onClick={() => {
                  let copy마이너스수량 = [...수량];
                  copy마이너스수량[i] -= 1;
                  수량변경(copy마이너스수량);
                }}>
                  -
                </button>
                {/* state를 왜 쓰는지 알고있어야함. */}
            </div>
            )
          })
        }
    </div>
  );
}

// /list 접속 시, page.tsx 보여줌.