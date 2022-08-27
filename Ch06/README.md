# 🧑‍💻 Chapter 06.

## State와 생명 주기

### ✅ 6-1 State

- State란?

  - 리액트에서 state는 <span style="font-weight:bold; color:tomato">리액트 컴포넌트의 상태</span>를 의미한다.
  - <span style="font-weight:bold; color:tomato">리액트 컴포넌트의 변경 가능한 데이터</span>
  - state를 정의할 때 중요한 점은 꼭 <span style="font-weight:bold; color:tomato">렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다.</span>  
    왜냐하면 state가 변경될 경우 컴포넌트가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련 없는 값을 포함하면 컴포넌트가 다시 렌더링되어 성능을 저하 시킬 수 있다.

- State의 특징

  - 그냥 하나의 <span style="font-weight:bold; color:tomato">자바스크립트 객체</span>이다.

  ```JSX
  /* LikeButton이라는 클래스 컴포넌트이다.
   * 모든 클래스 컴포넌트에는 constructor라는 이름의 함수가 존재하는데, 생성자는 클래스가
   * 생성될 때 실행되는 함수이다.
  */
  class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        // this.state 부분은 바로 현재 컴포넌트의 state를 정의하는 부분이다.
        // 클래스 컴포넌트의 경우 state를 생성자에서 정의한다.
        // 함수 컴포넌트는 state를 useState() 라는 훅을 사용해서 정의한다.
        // 정의한 state는 정의된 후 JS 변수를 다루듯이 직접 수정할 수 없다.
        this.state = {
            liked: false
        };
    }
  }
  ```

  ```JSX
  // sate를 직접 수정 (잘못된 사용법)
  this.state = {
      name: 'David'
  };

  // setState 함수를 통한 수정 (정상적인 방법)
  this.setState({
      name: 'David'
  })
  ```

  - state를 직접 수정할 수 있지만 리액트가 수정된 것을 제대로 인지하지 못할 수 있기 때문에  
    <span style="font-weight:bold; color:tomato">state는 직접적인 변경이 불가능하다</span>고 생각하는 것이 좋다.
  - state는 렌더링과 관련 있기 때문에 마음대로 수정하게 되면 개발자가 의도한 대로 작동하지 않을 가능성있다.
  - <span style="font-weight:bold; color:tomato">그래서 state를 변경하고자 할 때에는 꼭 setState()라는 함수를 사용해야 한다.</span>

---

### ✅ 6-2 생명주기에 대해 알아보기

- 먼저 컴포넌트가 생성되는 시점, 사람으로 말하면 출생이다.  
  이 과정을 마운트라고 부르는데 이때 컴포넌트의 constructor(생성자)가 실행된다.

- 업데이트 과정에서는 컴포넌트의 props가 변경되거나 setState() 함수 호출에 의해 state가 변경되거나, forceUpdate() 라는 강제 업데이트 함수 호출로 인해 컴포넌트가 다시 렌더링 된다.  
  그리고 렌더링 이후에 componentDidUpdate() 함수가 호출된다.

- 리액트 컴포넌트도 결국 언젠가 사라지는 과정을 겪게 되는데 이 과정을 언마운트라고 부른다.  
  그럼 언제 언마운트가 될까?

- <span style="color:tomato; font-weight:bold">상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때 언마운트 된다고 볼 수 있다.</span>  
  이 때 언마운트 직전에 componentWillUmount() 함수가 호출된다.

- <span style="color:tomato; font-weight:bold">컴포넌트가 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트되다가 사라진다는 것이다.</span>

---

### ⭐️ 마무리

- State

  - State란?

    - 리액트 컴포넌트의 변경 가능한 데이터

    - 컴포넌트를 개발하는 개발자가 직접 정의해서 사용

    - state가 변경될 경우 컴포넌트가 재렌더링됨

    - 렌더링이나 데이터 프름에 사용되는 값만 state에 포함시켜야 함.

  - State의 특징

    - 자바스크립트 객체 혀태로 존재

    - 직접적인 변경이 불가능 함

    - 클래스 컴포넌트

      - 생성자에서 모든 state를 한 번에 정의

      - state를 변경하고자 할 때에는 꼭 setState() 함수를 사용해야 한다.

    - 함수 컴포넌트

      - useState() 훅을 사용하여 각각의 state를 정의

      - 각 state별로 주어지는 set 함수를 사용하여 state 값을 변경

- 생명주기

  - 마운트

    - 컴포넌트가 생성될 때

    - componentDidMount()

  - 업데이트

    - 컴포넌트의 props가 변경될 때

    - setState() 함수 호출에 의해 state가 변경될 때

    - forceUpdate()라는 강제 업데이트 함수가 호출 될 때

    - componentDidUpdate()

  - 언마운트

    - 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때

    - componentWillUnmount()

  - 컴포넌트는 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트되다가 사라지는 과정을 겪음
