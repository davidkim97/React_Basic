# 🧑‍💻 Chapter 03.

## JSX

### 3-1 JSX의 역할

- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환하는 과정을 거친다.

- JSX 코드를 자바스크립트 코드로 변환하는 역할을 하는 것이 리액트의 createElement()라는 함수 이다.

```JS
class hello extends React.Component {
    render() {
        return <div>Hello {this.toWhat} </div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);
```

- 위 코드를 보면 Hello라는 이름을 가진 리액트 컴포넌트가 나오고 컴포넌트 내부에서 자바스크립트 코드와 HTML 코드가 결합된 JSX를 사용하고 있는 것을 볼 수 있다.

```JS
class Hello extends Reactg.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`)
    }
}

ReactDOM.render(
    React.createElement(Hello, {thWhat: 'World' }, null),
    document.getElementById('root')
);
```

- 위 코드는 JSX를 사용하지 않고 순수한 자바스크립트로만 작성했다.

- 두 코드를 비교해 보면 Hello 컴포넌트 내부에서 JSX를 사용했던 부분이 React.createElement()라는 함수로 대체된것을 알 수 있다.

```JS
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

const element = React.createElement(
    'h1',
    {className: 'greething'},
    'Hello, World!'
)
```

```JS
const element = {
    type: 'h1',
    props: {
        className: 'greething',
        children: 'Hello, World!'
    }
}
```

- 아래 코드는 createElement() 함수의 파라미터를 나타낸 것이다.

```JS
React.createElement(
    type,
    [props],
    [...children]
)
```

- 먼저 첫 번째 파라미터는 엘리먼트의 유형(type)을 나타낸다.  
  유형으로는 \<div>나 \<span>같은 HTML 태그가 올 수도 있고, 리액트 컴포넌트가 들어갈 수 있다.

- 두 번째 파라미터로는 props가 들어가게 된다.

- 마지막으로 children이 들어가는데 여기에서 children이란 현재 엘리먼트가 포함하고 있는 자식 엘리먼트라고 보면 된다.

---

### 3-2 JSX의 장점

- 코드가 간결해 진다.

  ```JS
  // JSX 사용
  <div>Hello, {name} </div>

  // JSX 사용 안함
  React.createElement('div', null, `Hello, ${name}`);
  ```

- 가독성이 향상된다.

- Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안성이 올라간다.

  ```JS
  const title = response.potentiallyMaliciousInput;
  // 이 코드는 안전하다
  const element = <h1>{title}</h1>
  ```

  - 기본적으로 ReactDOM은 렌더링하기 전에 임베딩된 값을 모두 문자열로 반환한다.

---

### 3-3 JSX 사용법

- 기본적으로 JSX는 자바스크립트 문법을 확장시킨 것이기 때문에, 모든 자바스크립트 문법을 지원한다. 여기에 추가로 XML과 HTML을 섞어서 사용하면 된다.

```JS
const name = '소플';
const element = <h1>안녕, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
```

```JS
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName = 'Chan Sik',
    lastName = 'Kim'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
```

- HTML 코드 사이에 괄호를 사용해서 변수가 아닌 자바스크립트 함수를 호출하는 것을 볼 수 있다.  
  이런식으로 JSX를 사용할 때 XML/HTML 코드 사이에 중괄호를 사용해서 JS의 변수나 함수 사용하면 된다.

```JS
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}
```

- HTML 태그 중간이 아닌 태그의 속성에 값을 넣을 때 사용 방법

```JS
// 큰따옴표 사이에 문자열을 넣거나
const element = <div tabIndex="0"></div>;
// 중괄호 사이에 JS 코드를 넣으면 됨.
const element = <img src={user.avatarUrl}></img>;
```

- <span style='color:tomato; font-weight:bold'>JSX에서는 중괄호를 사용하면 무조건 JS 코드가 들어간다 라고 생각하면 된다.</span>

- JSX를 사용해서 children을 정의하면 어떻게 되는지??

```JS
const element = (
    <div>
        <h1>안녕하세요</h1>
        <h2>열심히 리액트를 해보자</h2>
    </div>
);
```

- 여기서 \<div>태그의 children은 \<h1>, \<h2> 태그이다.

---

### ⭐️ 마무리

- JSX 란?

  - 자바스크립트와 XML/HTML을 함께 사용할 수 있는 자바스크립트의 확장 문법

- JSX의 역할

  - JSX로 작성된 코드는 모두 자바스크립트 코드로 변환
  - 리액트는 JSX코드를 모두 createElement()함수를 사용하는 코드로 변환

- JSX의 장점

  - 코드가 간결해짐
  - 가독성 향상
  - injextion Attactk을 방어함으로써 보안성이 올라감

- JSX 사용법
  - 기본적으로 모든 자바스크립트 문법 지원
  - 자바스크립트에 XML과 HTML을 섞어서 사용
  - 중괄호를 사용하여 자바스크립트 코드를 삽입
