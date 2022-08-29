# 🧑‍💻 Chapter 07.

## Hooks(훅)

### ✅ 7-1 훅이란 무엇인가

- <span style='color:tomato; font-weight:bold'>리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것이다.</span>

- 훅의 이름은 모두 use로 시작된다.

---

### ✅ 7-2 useState

- 가장 대표적이고 많이 사용되는 훅으로 useState()가 있다.

- state를 사용하기 위한 훅이다.

- 함수 컨포넌트에서 state를 클래스 컴포넌트처럼 사용하고 싶으면 useState()를 사용해야 한다.

```JSX
import React, {useState} from "react";

function Counter(props) {
    var count = 0;

    return (
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={() => count++}>
                클릭
            </button>
        </div>
    );
}
```

- 위 코드에 useState() 함수를 적용하여 보자

```JSX
// useState() 사용법
const [변수명, set함수명] = useState(초기값);
```

- useState()를 호출할 때 파라미터로 선언할 state의 초기값이 들어간다.

- 리턴된 배열에는 두 가지 항목이 들어있는데, 첫 번째 항목은 state로 선언된 변수이고,  
  두 번째 항목은 해당 state의 set 함수이다.

```JSX
import React, {useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

---

### ✅ 7-3 useEffect

- 사이드 이펙트를 수행하기 위한 훅이다.

- 리액트에서 사이드 이펙트는 그냥 효과 혹은 영향을 뜻하는 이펙트(effect)의 의미에 가깝다.

- 예를 들어 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미한다.

```JSX
// useEffect() 사용 방법
useEffect(이펙트 함수, 의존성 배열);
```

- 의존성 배열은 말 그대로 이 이펙트가 의존하고 있는 배열인데  
  <span style='color:tomato; font-weight:bold'>배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때</span> 실행된다.

- 만약 이펙트 함수가 마운트와 언마운트시에 단 한 번씩만 실행되게 하고 싶으면, 의존성 배열에 빈 배열([])을 넣으면된다.

- 의존성 배열은 생략할 수도 있는데 생략하게 되면 컴포넌트가 업데이트될 때마다 호출된다.

```JSX
import React, {useState, useEffect} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷하게 작동한다.
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 업데이트 한다.
        document.title=`총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

- useEffect()를 사용해서 클래스 컴포넌트에서 제공하는 componentDidMount(), componentDidUpdate()와 같은 생명주기 함수의 기능을 동일하게 수행하도록 만들었다.

- useEffect() 안에 있는 이펙트 함수에서는 브라우저에서 제공하는 API를 사용해서 document의 title을 업데이트한다.  
  document.title은 브라우저에서 페이지를 열었을 때 창에 표시되는 문자열이다.

- 의존성 배열 없이 useEffect()를 사용하면 리액트는 <span style='color:tomato; font-weight:bold'>DOM이 변경된 이후에 해당 이펙트 함수를 실행하라</span>는 의미로 받아들인다.

- 그렇다면 componentWillUnmount()와 동일한 기능은 useEffect()로 어떻게 구현할 수 있는지 알아보자

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
        return '대기 중...';
    }
    return isOnline ? "온라인" : "오프라인";
}
```

- 위 코드는 useEffect()에서 먼저 ServerAPI를 사용하여 사용자의 상태를 구독하고 있다.  
  이후 함수를 하나 리턴하는데 해당 함수 안에는 구독을 해지하는 API를 호출하도록 되어있다.

- <span style='color:tomato; font-weight:bold'>useEffect()에서 리턴하는 함수는 컴포넌트가 마운트 해제될 때 호출된다.</span>

- useEffect() 혹은 하나의 컴포넌트에 여러 개 사용할 수 있다.

```JSX
function UserStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
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
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    ...

    return () => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨
        ...
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```
