# 🧑‍💻 Chapter 04.

## 엘리먼트 렌더링

### 4-1 엘리먼트에 대해 알아보기

- 엘리먼트의 정의
  - 리액트 앱을 구성하는 요소를 의미한다.
  - 리액트 앱을 구성하는 가장 작은 블록들을 엘리먼트라고 한다.

```JS
const element = <h1>Hello, world</h1>;
```

- 위 코드에서 변수 이름이 elenent로 되어있는 것은 대입 연산자의 오른쪽 부분은 리액트의 createElement() 함수를 사용하여 엘리먼트를 생성하는 것이다.

- 엘리먼트의 생김새

  - 리액트 엘리먼트는 자바스크립트 객체 형태로 존재한다.

    ```JS
    {
        type: 'button',
        props: {
            className: 'bg-green',
            children: {
                type: 'b',
                props: {
                    children: 'Hello, element!'
                }
            }
        }
    }
    ```

    - 위 코드는 버튼을 나타내기 위한 엘리먼트이다.
    - type에 HTML 태그 이름이 문자열로 들어가는 경우, 엘리먼트는 해당 태그 이름을 가진 DOM Node를 나타내고 props는 속성을 나타낸다.
    - 위 엘리먼트가 실제로 렌더링 되면 아래와 같은 DOM 엘리먼트가 될 것이다.

    ```JS
    <button class='bg-green'>
        <b>
            Hello, element!
        </b>
    ```

    - 엘리먼트의 type에 HTML 태그 이름이 문자열로 들어가는 것이 아닐 경우  
      다만, 위에 나왔던 엘리먼트와 한 가지 다른 점은 type에 HTML태그가 아닌 리액트 컴포넌트의 이름이 들어갔다는 것이다.

    ```JS
    {
        type : Button,
        props : {
            color: 'green',
            children: 'Hello, element!'
        }
    }
    ```

    - 이처럼 리액트 엘리먼트는 자바스크림트 객체 형태로 존재한다.

    ```JS
    function Button(props) {
        return (
            <button className={`bg-${props.color}`}>
                <b>
                    {props.children}
                </b>
            </button>
        )
    }

    function ConfirmDialog(props) {
        return (
            <div>
                <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
                <Button color='green'>확인</Button>
            </div>
        )
    }
    ```

    - 위 코드는 Button 컴포넌트와 ConfirmDialog 컴포넌트가 있으며, ConfirmDialog 컴포넌트가 Button 컴포넌트를 포함하고 있다.

    - 최종적으로 엘리먼트는 아래와 같은 모습이다.

    ```JS
    {
        type: 'div',
        props: {
            children: [
                {
                    type: 'p',
                    props: {
                        children: '내용을 확인하셨으면 확인 버튼을 눌러주세요'
                    }
                },
                {
                    type: Button,
                    props: {
                        color: 'green',
                        children: '확인'
                    }
                }
            ]
        }
    }
    ```

- 엘리먼트의 특징
  - 불변성: 한 번 생성된 엘리먼트는 변하지 않는다.  
    엘리먼트 생성 후에는 children이나 attributes를 바꿀 수 없다.

---

### 4.2 렌더링된 엘리먼트 업데이트하기

- 엘리먼트는 한 번 생성되면 바꿀 수 없기 때문에 엘리먼트를 업데이트하기 위해서는 다시 생성해야 한다.

```JS
function tick() {
    const element = (
        <div>
            <h1>안녕, 리액트</h1>
            <h2>현재 시간: {new Date().toLocalTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

- tick() 함수는 현재 시간을 포함하고 있는 엘리먼트를 생성하여 root div에 렌더링하는 역할을 한다.
- JS의 setInterval() 함수를 사용해서 tick() 함수를 매초 호출하고 있다.
- 내부적으로는 tick()함수가 호출될 때마다 기존 엘리먼트를 변경하는 것이 아니라  
  <span style='font-weight:bold; color:tomato'>새로운 엘리먼트를 생성해서 바꿔치기하는 것</span>이다.

---

### 마무리

- 엘리먼트

  - 엘리먼트의 정의

    - 리액트 앱의 가장 작은 블록들
    - 화면에 나타나는 내용을 기술하는 자바스크립트 객체
    - 리액트 엘리먼트는 DOM 엘리먼트의 가상 표현

  - 엘리먼트의 생김새

    - 엘리먼트는 자바스크립트 객체 형태로 존재
    - 컴포넌트 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체

  - 엘리먼트의 특징
    - 불변성을 갖고 있음
    - 엘리먼트 생성 후에는 자식이나 속성을 바꿀 수 없음

- 엘리먼트 렌더링하기

  - 렌더링을 위해 ReactDOM의 render()라는 함수를 사용
    - 리액트 엘리먼트를 HTML엘리먼트에 렌더링하는 역할
  - 렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정

- 렌더링된 엘리먼트 업데이트하기
  - 엘리먼트는 한 번 생성되면 바꿀 수 없기 때문에 엘리먼트를 업데이트하기 위해서는 다시 생성해야 한다.
  - 기존 엘리먼트를 변경하는 것이 아니라 새로운 엘리먼트를 생성해서 바꿔치기 하는 것
