# ๐งโ๐ป Chapter 07.

## Hooks(ํ)

### โ 7-1 ํ์ด๋ ๋ฌด์์ธ๊ฐ

- <span style='color:tomato; font-weight:bold'>๋ฆฌ์กํธ์ state์ ์๋ช์ฃผ๊ธฐ ๊ธฐ๋ฅ์ ๊ฐ๊ณ ๋ฆฌ๋ฅผ ๊ฑธ์ด ์ํ๋ ์์ ์ ์ ํด์ง ํจ์๋ฅผ ์คํ๋๋๋ก ๋ง๋  ๊ฒ์ด๋ค.</span>

- ํ์ ์ด๋ฆ์ ๋ชจ๋ use๋ก ์์๋๋ค.

---

### โ 7-2 useState

- ๊ฐ์ฅ ๋ํ์ ์ด๊ณ  ๋ง์ด ์ฌ์ฉ๋๋ ํ์ผ๋ก useState()๊ฐ ์๋ค.

- state๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํ ํ์ด๋ค.

- ํจ์ ์ปจํฌ๋ํธ์์ state๋ฅผ ํด๋์ค ์ปดํฌ๋ํธ์ฒ๋ผ ์ฌ์ฉํ๊ณ  ์ถ์ผ๋ฉด useState()๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.

```JSX
import React, {useState} from "react";

function Counter(props) {
    var count = 0;

    return (
        <div>
            <p>์ด {count}๋ฒ ํด๋ฆญ ํ์ต๋๋ค.</p>
            <button onClick={() => count++}>
                ํด๋ฆญ
            </button>
        </div>
    );
}
```

- ์ ์ฝ๋์ useState() ํจ์๋ฅผ ์ ์ฉํ์ฌ ๋ณด์

```JSX
// useState() ์ฌ์ฉ๋ฒ
const [๋ณ์๋ช, setํจ์๋ช] = useState(์ด๊ธฐ๊ฐ);
```

- useState()๋ฅผ ํธ์ถํ  ๋ ํ๋ผ๋ฏธํฐ๋ก ์ ์ธํ  state์ ์ด๊ธฐ๊ฐ์ด ๋ค์ด๊ฐ๋ค.

- ๋ฆฌํด๋ ๋ฐฐ์ด์๋ ๋ ๊ฐ์ง ํญ๋ชฉ์ด ๋ค์ด์๋๋ฐ, ์ฒซ ๋ฒ์งธ ํญ๋ชฉ์ state๋ก ์ ์ธ๋ ๋ณ์์ด๊ณ ,  
  ๋ ๋ฒ์งธ ํญ๋ชฉ์ ํด๋น state์ set ํจ์์ด๋ค.

```JSX
import React, {useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>์ด {count}๋ฒ ํด๋ฆญ ํ์ต๋๋ค.</p>
            <button onClick={() => setCount(count + 1)}>
                ํด๋ฆญ
            </button>
        </div>
    );
}
```

---

### โ 7-3 useEffect

- ์ฌ์ด๋ ์ดํํธ๋ฅผ ์ํํ๊ธฐ ์ํ ํ์ด๋ค.

- ๋ฆฌ์กํธ์์ ์ฌ์ด๋ ์ดํํธ๋ ๊ทธ๋ฅ ํจ๊ณผ ํน์ ์ํฅ์ ๋ปํ๋ ์ดํํธ(effect)์ ์๋ฏธ์ ๊ฐ๊น๋ค.

- ์๋ฅผ ๋ค์ด ์๋ฒ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๊ฑฐ๋ ์๋์ผ๋ก DOM์ ๋ณ๊ฒฝํ๋ ๋ฑ์ ์์์ ์๋ฏธํ๋ค.

```JSX
// useEffect() ์ฌ์ฉ ๋ฐฉ๋ฒ
useEffect(์ดํํธ ํจ์, ์์กด์ฑ ๋ฐฐ์ด);
```

- ์์กด์ฑ ๋ฐฐ์ด์ ๋ง ๊ทธ๋๋ก ์ด ์ดํํธ๊ฐ ์์กดํ๊ณ  ์๋ ๋ฐฐ์ด์ธ๋ฐ  
  <span style='color:tomato; font-weight:bold'>๋ฐฐ์ด ์์ ์๋ ๋ณ์ ์ค์ ํ๋๋ผ๋ ๊ฐ์ด ๋ณ๊ฒฝ๋์์ ๋</span> ์คํ๋๋ค.

- ๋ง์ฝ ์ดํํธ ํจ์๊ฐ ๋ง์ดํธ์ ์ธ๋ง์ดํธ์์ ๋จ ํ ๋ฒ์ฉ๋ง ์คํ๋๊ฒ ํ๊ณ  ์ถ์ผ๋ฉด, ์์กด์ฑ ๋ฐฐ์ด์ ๋น ๋ฐฐ์ด([])์ ๋ฃ์ผ๋ฉด๋๋ค.

- ์์กด์ฑ ๋ฐฐ์ด์ ์๋ตํ  ์๋ ์๋๋ฐ ์๋ตํ๊ฒ ๋๋ฉด ์ปดํฌ๋ํธ๊ฐ ์๋ฐ์ดํธ๋  ๋๋ง๋ค ํธ์ถ๋๋ค.

```JSX
import React, {useState, useEffect} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate์ ๋น์ทํ๊ฒ ์๋ํ๋ค.
    useEffect(() => {
        // ๋ธ๋ผ์ฐ์  API๋ฅผ ์ฌ์ฉํด์ document์ title์ ์๋ฐ์ดํธ ํ๋ค.
        document.title=`์ด ${count}๋ฒ ํด๋ฆญํ์ต๋๋ค.`;
    });

    return (
        <div>
            <p>์ด {count}๋ฒ ํด๋ฆญ ํ์ต๋๋ค.</p>
            <button onClick={() => setCount(count + 1)}>
                ํด๋ฆญ
            </button>
        </div>
    );
}
```

- useEffect()๋ฅผ ์ฌ์ฉํด์ ํด๋์ค ์ปดํฌ๋ํธ์์ ์ ๊ณตํ๋ componentDidMount(), componentDidUpdate()์ ๊ฐ์ ์๋ช์ฃผ๊ธฐ ํจ์์ ๊ธฐ๋ฅ์ ๋์ผํ๊ฒ ์ํํ๋๋ก ๋ง๋ค์๋ค.

- useEffect() ์์ ์๋ ์ดํํธ ํจ์์์๋ ๋ธ๋ผ์ฐ์ ์์ ์ ๊ณตํ๋ API๋ฅผ ์ฌ์ฉํด์ document์ title์ ์๋ฐ์ดํธํ๋ค.  
  document.title์ ๋ธ๋ผ์ฐ์ ์์ ํ์ด์ง๋ฅผ ์ด์์ ๋ ์ฐฝ์ ํ์๋๋ ๋ฌธ์์ด์ด๋ค.

- ์์กด์ฑ ๋ฐฐ์ด ์์ด useEffect()๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฆฌ์กํธ๋ <span style='color:tomato; font-weight:bold'>DOM์ด ๋ณ๊ฒฝ๋ ์ดํ์ ํด๋น ์ดํํธ ํจ์๋ฅผ ์คํํ๋ผ</span>๋ ์๋ฏธ๋ก ๋ฐ์๋ค์ธ๋ค.

- ๊ทธ๋ ๋ค๋ฉด componentWillUnmount()์ ๋์ผํ ๊ธฐ๋ฅ์ useEffect()๋ก ์ด๋ป๊ฒ ๊ตฌํํ  ์ ์๋์ง ์์๋ณด์

```JSX
import React, {useState, useEffect} from "react";

function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id,handleStatusChange);
        };
    });

    if (isOnline === null) {
        return '๋๊ธฐ ์ค...';
    }
    return isOnline ? "์จ๋ผ์ธ" : "์คํ๋ผ์ธ";
}
```

- ์ ์ฝ๋๋ useEffect()์์ ๋จผ์  ServerAPI๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์์ ์ํ๋ฅผ ๊ตฌ๋ํ๊ณ  ์๋ค.  
  ์ดํ ํจ์๋ฅผ ํ๋ ๋ฆฌํดํ๋๋ฐ ํด๋น ํจ์ ์์๋ ๊ตฌ๋์ ํด์งํ๋ API๋ฅผ ํธ์ถํ๋๋ก ๋์ด์๋ค.

- <span style='color:tomato; font-weight:bold'>useEffect()์์ ๋ฆฌํดํ๋ ํจ์๋ ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ ํด์ ๋  ๋ ํธ์ถ๋๋ค.</span>

- useEffect() ํน์ ํ๋์ ์ปดํฌ๋ํธ์ ์ฌ๋ฌ ๊ฐ ์ฌ์ฉํ  ์ ์๋ค.

```JSX
function UserStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `์ด ${count}๋ฒ ํด๋ฆญํ์ต๋๋ค.`;
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unSubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }
}
```

```JSX
useEffect(() => {
    // ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ ๋ ์ดํ,
    // ์์กด์ฑ ๋ฐฐ์ด์ ์๋ ๋ณ์๋ค ์ค ํ๋๋ผ๋ ๊ฐ์ด ๋ณ๊ฒฝ๋์์ ๋ ์คํ๋จ
    // ์์กด์ฑ ๋ฐฐ์ด์ ๋น ๋ฐฐ์ด์ ๋ฃ์ผ๋ฉด ๋ง์ดํธ์ ์ธ๋ง์ดํธ์์ ๋จ ํ ๋ฒ์ฉ๋ง ์คํ๋จ
    // ์์กด์ฑ ๋ฐฐ์ด ์๋ต ์ ์ปดํฌ๋ํธ ์๋ฐ์ดํธ ์๋ง๋ค ์คํ๋จ
    ...

    return () => {
        // ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ ํด์ ๋๊ธฐ ์ ์ ์คํ๋จ
        ...
    }
}, [์์กด์ฑ ๋ณ์1, ์์กด์ฑ ๋ณ์2, ...]);
```
