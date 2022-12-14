# ๐งโ๐ป Chapter 03.

## JSX

### 3-1 JSX์ ์ญํ 

- JSX๋ ๋ด๋ถ์ ์ผ๋ก XML/HTML ์ฝ๋๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ณํํ๋ ๊ณผ์ ์ ๊ฑฐ์น๋ค.

- JSX ์ฝ๋๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ก ๋ณํํ๋ ์ญํ ์ ํ๋ ๊ฒ์ด ๋ฆฌ์กํธ์ createElement()๋ผ๋ ํจ์ ์ด๋ค.

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

- ์ ์ฝ๋๋ฅผ ๋ณด๋ฉด Hello๋ผ๋ ์ด๋ฆ์ ๊ฐ์ง ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋์ค๊ณ  ์ปดํฌ๋ํธ ๋ด๋ถ์์ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋์ HTML ์ฝ๋๊ฐ ๊ฒฐํฉ๋ JSX๋ฅผ ์ฌ์ฉํ๊ณ  ์๋ ๊ฒ์ ๋ณผ ์ ์๋ค.

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

- ์ ์ฝ๋๋ JSX๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ์์ํ ์๋ฐ์คํฌ๋ฆฝํธ๋ก๋ง ์์ฑํ๋ค.

- ๋ ์ฝ๋๋ฅผ ๋น๊ตํด ๋ณด๋ฉด Hello ์ปดํฌ๋ํธ ๋ด๋ถ์์ JSX๋ฅผ ์ฌ์ฉํ๋ ๋ถ๋ถ์ด React.createElement()๋ผ๋ ํจ์๋ก ๋์ฒด๋๊ฒ์ ์ ์ ์๋ค.

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

- ์๋ ์ฝ๋๋ createElement() ํจ์์ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ํ๋ธ ๊ฒ์ด๋ค.

```JS
React.createElement(
    type,
    [props],
    [...children]
)
```

- ๋จผ์  ์ฒซ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ ์๋ฆฌ๋จผํธ์ ์ ํ(type)์ ๋ํ๋ธ๋ค.  
  ์ ํ์ผ๋ก๋ \<div>๋ \<span>๊ฐ์ HTML ํ๊ทธ๊ฐ ์ฌ ์๋ ์๊ณ , ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ ๋ค์ด๊ฐ ์ ์๋ค.

- ๋ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ก๋ props๊ฐ ๋ค์ด๊ฐ๊ฒ ๋๋ค.

- ๋ง์ง๋ง์ผ๋ก children์ด ๋ค์ด๊ฐ๋๋ฐ ์ฌ๊ธฐ์์ children์ด๋ ํ์ฌ ์๋ฆฌ๋จผํธ๊ฐ ํฌํจํ๊ณ  ์๋ ์์ ์๋ฆฌ๋จผํธ๋ผ๊ณ  ๋ณด๋ฉด ๋๋ค.

---

### 3-2 JSX์ ์ฅ์ 

- ์ฝ๋๊ฐ ๊ฐ๊ฒฐํด ์ง๋ค.

  ```JS
  // JSX ์ฌ์ฉ
  <div>Hello, {name} </div>

  // JSX ์ฌ์ฉ ์ํจ
  React.createElement('div', null, `Hello, ${name}`);
  ```

- ๊ฐ๋์ฑ์ด ํฅ์๋๋ค.

- Injection Attack์ด๋ผ ๋ถ๋ฆฌ๋ ํดํน ๋ฐฉ๋ฒ์ ๋ฐฉ์ดํจ์ผ๋ก์จ ๋ณด์์ฑ์ด ์ฌ๋ผ๊ฐ๋ค.

  ```JS
  const title = response.potentiallyMaliciousInput;
  // ์ด ์ฝ๋๋ ์์ ํ๋ค
  const element = <h1>{title}</h1>
  ```

  - ๊ธฐ๋ณธ์ ์ผ๋ก ReactDOM์ ๋ ๋๋งํ๊ธฐ ์ ์ ์๋ฒ ๋ฉ๋ ๊ฐ์ ๋ชจ๋ ๋ฌธ์์ด๋ก ๋ฐํํ๋ค.

---

### 3-3 JSX ์ฌ์ฉ๋ฒ

- ๊ธฐ๋ณธ์ ์ผ๋ก JSX๋ ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ ํ์ฅ์ํจ ๊ฒ์ด๊ธฐ ๋๋ฌธ์, ๋ชจ๋  ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ ์ง์ํ๋ค. ์ฌ๊ธฐ์ ์ถ๊ฐ๋ก XML๊ณผ HTML์ ์์ด์ ์ฌ์ฉํ๋ฉด ๋๋ค.

```JS
const name = '์ํ';
const element = <h1>์๋, {name}</h1>;

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

- HTML ์ฝ๋ ์ฌ์ด์ ๊ดํธ๋ฅผ ์ฌ์ฉํด์ ๋ณ์๊ฐ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์๋ฅผ ํธ์ถํ๋ ๊ฒ์ ๋ณผ ์ ์๋ค.  
  ์ด๋ฐ์์ผ๋ก JSX๋ฅผ ์ฌ์ฉํ  ๋ XML/HTML ์ฝ๋ ์ฌ์ด์ ์ค๊ดํธ๋ฅผ ์ฌ์ฉํด์ JS์ ๋ณ์๋ ํจ์ ์ฌ์ฉํ๋ฉด ๋๋ค.

```JS
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}
```

- HTML ํ๊ทธ ์ค๊ฐ์ด ์๋ ํ๊ทธ์ ์์ฑ์ ๊ฐ์ ๋ฃ์ ๋ ์ฌ์ฉ ๋ฐฉ๋ฒ

```JS
// ํฐ๋ฐ์ดํ ์ฌ์ด์ ๋ฌธ์์ด์ ๋ฃ๊ฑฐ๋
const element = <div tabIndex="0"></div>;
// ์ค๊ดํธ ์ฌ์ด์ JS ์ฝ๋๋ฅผ ๋ฃ์ผ๋ฉด ๋จ.
const element = <img src={user.avatarUrl}></img>;
```

- <span style='color:tomato; font-weight:bold'>JSX์์๋ ์ค๊ดํธ๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฌด์กฐ๊ฑด JS ์ฝ๋๊ฐ ๋ค์ด๊ฐ๋ค ๋ผ๊ณ  ์๊ฐํ๋ฉด ๋๋ค.</span>

- JSX๋ฅผ ์ฌ์ฉํด์ children์ ์ ์ํ๋ฉด ์ด๋ป๊ฒ ๋๋์ง??

```JS
const element = (
    <div>
        <h1>์๋ํ์ธ์</h1>
        <h2>์ด์ฌํ ๋ฆฌ์กํธ๋ฅผ ํด๋ณด์</h2>
    </div>
);
```

- ์ฌ๊ธฐ์ \<div>ํ๊ทธ์ children์ \<h1>, \<h2> ํ๊ทธ์ด๋ค.

---

### โญ๏ธ ๋ง๋ฌด๋ฆฌ

- JSX ๋?

  - ์๋ฐ์คํฌ๋ฆฝํธ์ XML/HTML์ ํจ๊ป ์ฌ์ฉํ  ์ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ ๋ฌธ๋ฒ

- JSX์ ์ญํ 

  - JSX๋ก ์์ฑ๋ ์ฝ๋๋ ๋ชจ๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ก ๋ณํ

  - ๋ฆฌ์กํธ๋ JSX์ฝ๋๋ฅผ ๋ชจ๋ createElement()ํจ์๋ฅผ ์ฌ์ฉํ๋ ์ฝ๋๋ก ๋ณํ

- JSX์ ์ฅ์ 

  - ์ฝ๋๊ฐ ๊ฐ๊ฒฐํด์ง

  - ๊ฐ๋์ฑ ํฅ์

  - injextion Attactk์ ๋ฐฉ์ดํจ์ผ๋ก์จ ๋ณด์์ฑ์ด ์ฌ๋ผ๊ฐ

- JSX ์ฌ์ฉ๋ฒ

  - ๊ธฐ๋ณธ์ ์ผ๋ก ๋ชจ๋  ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ ์ง์

  - ์๋ฐ์คํฌ๋ฆฝํธ์ XML๊ณผ HTML์ ์์ด์ ์ฌ์ฉ

  - ์ค๊ดํธ๋ฅผ ์ฌ์ฉํ์ฌ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ ์ฝ์
