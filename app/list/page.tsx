import Image from "next/image";
import styles from "./page.module.css";

export default function List(): JSX.Element {

    let 상품 :string[] = ['Tomatoes', 'Pasta', 'Coconut', 'Apple', 'Peach', 'Banana', 'Kiwi']

    let a :(string | number)[] = [20, 30, 'hello']
    console.log(a[1])

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
            <div className="food">
                <h4>{상품[i]} $40</h4>
            </div>
            )
          })
        }
    </div>
  );
}

// /list 접속 시, page.tsx 보여줌.