# 🧑‍💻 Chapter 05.

## 컴포넌트와 Props

### 5-1 컴포넌트에 대해 알아보기

- 컴포넌트 기반이라는 것은 작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고, 또 이러한 컴포넌트들이 모여서 전체 페이지를 구성한다.

- 하나의 컴포넌트를 반복적으로 사용함으로써 전체 코드의 양이 줄어 자연스레 개발 시간과 유지보수 비용도 줄일 수 있다.

- 리액트 컴포넌트는 <span style='font-weight:bold; color:tomato'>어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴해주는 것이다.</span>

- 리액트 컴포넌트는 만들고자 하는 대로 props(속성)를 넣으면 해당 속성에 맞춰 화면에 나타날 엘리먼트를 만들어 주는 것이다.

---

### 5-2 Props에 대해 알아보기

- Props의 개념

  - <span style='font-weight:bold; color:tomato'>리액트 컴포넌트의 속성</span>
  - 리액트 컴포넌트에서 눈에 보이는 굴자나 색깔 등의 속성을 바꾸고 싶을 때 사용하는 컴포넌트의 속 재료라고 생각하면 된다.
  - <span style='font-weight:bold; color:tomato'>컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체</span>
  - 컴포넌트에 어떤 데이터를 전달하고 전달된 데이터에 따라 다른 모습으로 엘리먼트를 화면에 렌더링하고 싶을 때, 해당 데이터를 props에 넣어 전달 하는 것이다.

- Props의 특징

  - 읽기 전용(Read-only)이다.

    ```JS
    // pure 함수
    // input을 변경하지 않으면 같은 input에 대해서 항상 같은 output을 리턴
    function sum(a, b) {
        return a + b;
    }
    ```

  - 위 함수는 입력값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값을 낸다.
  - 이러한 함수를 Pure하다 라고 한다.

    ```JS
    // impure 함수
    // input을 변경함
    function withdraw(account, amount) {
        account.total -= amount;
    }
    ```

  - 입력으로 받은 파라미터 account의 값을 변경 하는데 이런 경우 impure하다 라고 한다.

  - <span style='font-weight:bold; color:tomato'>리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 한다.</span>

- Props 사용법

  - JSX를 사용하는 경우 키-값 쌍의 형태로 컴포넌트에 props를 넣을 수 있다.

    ```JS
    function App(props) {
        return (
            <Profile
                name="소플"
                introduction="안녕하세요, 소플입니다."
                viewCount={1500}
            />
        );
    }
    ```

  - App 컴포넌트가 나오고, 그 안에서 Profile 컴포넌트를 사용하고 있다.  
    Profile 컴포넌트에 name, introduction, viewCount라는 세 가지 속성을 넣어 줬다.
  - JSX를 배울 때 <span style='font-weight:bold; color:tomato'>중괄호를 사용하면 무조건 자바스크립트 코드가 들어간다</span> 라고 학습 했다.
  - 마찬가지로 props에 값을 넣을 때에도 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트등이 들어갈 경우에는 중괄호를 사용해서 감싸줘야 한다.

  ```JS
  function App(props) {
    return (
        <Layout
            width={2500}
            hight={1440}
            header={
                <Header title="David의 블로그 입니다." />
            }
            footer = {
                <Footer />
            }
        />
    );
  }
  ```

  - JSX를 사용하지 않을 경우의 사용법

    ```JS
    React.createElement(
        type,
        [props],
        [...children]
    )
    ```

  - 위에서 작성한 Profile 컴포넌트를 JSX를 사용하지 않고 작성하면 아래와 같다.

    ```JS
    React.createElement(
        Profile,
        {
            name: "David",
            introduction: "안녕하세요. David입니다.",
            viewCount : 1500
        },
        null
    );
    ```

    - 하위 컴포넌트가 없기 때문에 children은 null이 들어갔다.

---

### 5-3 컴포넌트 만들기

- 컴포넌트의 종류

  - 클래스 컴포넌트와 함수 컴포넌트가 있다.
  - 지금은 함수 컴포넌트에서 Hook이라는 것을 사용한다.

- 함수 컴포넌트

  - 리액트의 컴포넌트를 일종의 함수라고 생각한다.

    ```JS
    function Welcome(props) {
        return <h1>안녕, {props.name}</h1>;
    }
    // Welcome 이라는 함수이다.
    // 하나의 props 객체를 받아서 인사말에 담긴 리액트 엘리먼트를 리턴하기 때문에
    // 리액트 컴포넌트라고 할 수 있다.
    ```

- 클래스 컴포넌트

  ```JS
  class Welcome extends React.Component {
      render() {
          return <h1>안녕, {props.name}</h1>;
      }
  }
  ```

  - 함수 컴포넌트와의 가장 큰 차이점은 리액트의 모든 클래스 컴포넌트는 React.Component를 상속 받아서 만든다.

- 컴포넌트 이름 짓기

  - <span style='font-weight:bold; color:tomato'>컴포넌트의 이름은 항상 대문자로 시작해야 한다.</span>
  - 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문에 대문자로 입력해야 한다.

    ```JS
    // HTML div 태그로 인식
    const element = <div />;

    // Welcome 이라는 리액트 컴포넌트로 인식
    const element = <Welcome name="David" />;
    ```

- 컴포넌트 렌더링

  ```JS
  // DOM 태그를 사용한 element
  const element = <div />;

  // 사용자가 정의한 컴포넌트를 사용한 element
  const element = <Welcome name='David' />;
  ```

  - 위 코드는 리액트 엘리먼트를 만들어내는 코드이다.
  - 아래 실제 렌더링 하는 코드

    ```JS
    function Welcome(props) {
        return <h1>안녕, {props.name}</h1>;
    }

    const element = <Welcome name='David'>;

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
    ```

---

### 5-4 컴포넌트 합성

- 컴포넌트 합성은 <span style='font-weight:bold; color:tomato'>여러 개의 컴포넌트를 함쳐서 하나의 컴포넌트를 만드는 것이다.</span>

  ```JS
  function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
  }

  function App(props) {
      return (
          <div>
              <Welcome name='Mike' />
              <Welcome name='Steve' />
              <Welcome name='Jane' />
          </div>
      )
  }

  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )
  ```

  - 위 코드를 보면 props의 값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용하는 것을 볼 수 있다.  
    이렇게 하면 App이라는 컴포넌트는 Welcome 컴포넌트를 세 개를 포함하고 있는 컴포넌트가 되는 것이다.

---

### 5-5 컴포넌트 추출

- 컴포넌트 추출이란 <span style='font-weight:bold; color:tomato'>큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.</span>

- 컴포넌트를 추출하면 컴포넌트의 재사용성이 올라간다.  
  컴포넌트가 작아질수록 해당 컴포넌트의 기능과 목적이 명확해지고, props도 단순해지기 때문에 다른 곳에서 사용할 수있는 확률이 높아지기 때문이다.

  ```JS
  function Comment(props) {
      return (
          <div className="comment">
              <div calssName="user-info">
                  <img className="avatar"
                      src={props.author.avatarUrl}
                      alt={props.author.name}
                  />
                  <div className="user-info-name">
                      {props.author.name}
                  </div>
              </div>

              <div className="comment-text">
                  {props.text}
              </div>

              <div className="comment-date">
                  {formatDate(props.date)}
              </div>
          </div>
      );
  }
  ```

  - Comment라는 컴포넌트가 하나 있다.  
    이 컴포넌트는 댓글을 표시하기 위한 컴포넌트로 내부에 작성자의 프로필 이미지와 이름 그리고 댓글 내용과 작성일을 포함하고 있다.
  - 먼저 Avatar 추출하고 있는 부분을 살펴보자

    ```JS
    function Avatar(props) {
        return (
            <img className="avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
        );
    }
    ```

    ```JS
    // 추출한 Avatar 컴포넌트를 실제로 Comment 컴포넌트에 반영.
    function Comment(props) {
        return (
            <div className="comment">
                <div className="user-info">
                    <Avatar user={props.author} />
                    <div className="user-info-name">
                        {props.author.name}
                    </div>
                </div>

                <div className="comment-info">
                    {props.text}
                </div>

                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
    }
    ```

    ```JS
    function UserInfo(props) {
        return (
            <div className="user-info">
                <Avatar user={props.user} />
                <div className="user-info-name">
                    {props.user.name}
                </div>
            </div>
        );
    }
    ```

  - 사용자의 정보를 담고 있는 UserInfo라는 컴포넌트 추출.
  - 추출한 UserInfo 컴포넌트를 Comment 컴포넌트에 반영.

    ```JS
    function Comment(props) {
        return (
            <div className="comment">
                <UserInfo user={props.author} />
                <div className="comment-text">
                    {props.text}
                </div>
                <div className="comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        )
    }
    ```

---

### ⭐️ 마무리

- 리액트 컴포넌트

  - 컴포넌트 기반 구조
    - 작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여서 전체 페이지를 구성
  - 개념적으로 자바스크립트 함수와 비슷하다.
    - 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴함.

- Props

  - Props의 개념
    - 리액트 컴포넌트의 속성
    - 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
  - Props의 특징
    - 읽기 전용
    - 리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 함.
  - Props 사용법
    - JSX를 사용할 경우 컴포넌트에 키-값 쌍 형태로 넣어 주면 됨.
    - 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우에는 중괄호를 사용해서 감싸주어야 한다.
    - JSX를 사용하지 않는 경우에는 createElement() 함수의 두 번째 파라미터로 자바스크립트 객체를 넣어주면 됨.

- 컴포넌트 만들기

  - 컴포넌트의 종류
    - 클래스 컴포넌트와 함수 컴포넌트로 나뉨
  - 함수 컴포넌트
    - 함수 형태로 된 컴포넌트
  - 클래스 컴포넌트
    - ES6의 클래스를 사용하여 만들어진 컴포넌트
  - 컴포넌트 이름 짓기
    - 컴포넌트의 이름은 항상 대문자로 시작해야 함.
    - 소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하기 때문
  - 컴포넌트 렌더링
    - 컴포넌트로부터 엘리먼트를 생성하여 이를 리액트 DOM에 전달

- 컴포넌트 합성

  - 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것

- 컴포넌트 추출
  - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
  - 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋다.
