'use Client'
import {age, name} from './data'
import Hello from './hello'

export default function Cart() :JSX.Element {
    let 장바구니 :string[] = ['Tomato', 'Pasta', 'Coconut']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명 {age}</p>
          <p>$40 {name}</p>
          <p>1개</p>
        </div>
        <CartItem 작명={장바구니[0]}/>
        <CartItem 작명={장바구니[1]}/>
        <CartItem 작명={장바구니[2]}/>
        <Hello/>
        <Banner content="롯데카드"/>
        <Banner content="현대카드"/>
      </div>
    )
}

function Banner(props: {content :string}) :JSX.Element {
    return <h4>{props.content} 결제 행사중</h4>
}

function CartItem(props: {작명 :string}) :JSX.Element {
    return (
        <div className="cart-item">
          <p>{props.작명}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
}
// 리턴값이 <div>...</div>면 JSX.Element가 반환타입임.

// Component 종류가 2개 있는데,
// 위의 CartItem처럼 아무데나 대충 만든건 Server component,
// 코드 맨위에다가 'use Client'라고 적은건 client component다.
// 이 두개의 차이는
// server component에는 java script 기능을 넣는 것이 불가능.
// 즉, useState, useEffect 사용하는것이 불가능함.
// 반면에 client component는 가능함.

// client component가 기본적으로는 좋지만,
// 큰 페이지는 server component를 추천하고,
// JS기능 필요한 곳만 client component가 좋을듯