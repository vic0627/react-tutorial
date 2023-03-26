import React, { Component } from "react"; // 引入 React 定義好的 Component

class ClassTutorial extends Component {
  // 類別 ClassTutorial 是繼承 Component

  constructor(props) {
    // 建構子與 props

    super(props); // 透過 super() 取得所繼承類別中的變數結構

    this.styleArg = {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }; // css 設定

    this.previousName = "previous name";

    this.changeState = this.changeState.bind(this);
    // ES6 的 class 中，member function 的 this 指向 undefined，
    // 需使用 `this.函式名稱 = this.函式名稱.bind(this)` 綁定此物件。

    // React virtualDOM 只有在 1. props 2. state 改變時才會更新。
    this.state = {
      name: "current name",
      mounted: false,
      textStyle: {
        color: "#ffaa00",
        fontSize: "24px",
      },
    };
  }

  // state 內的變數唯讀的，須以 setstate() 來更改。
  changeState() {
    this.setState({ name: this.previousName });
    this.setState({ mounted: true, connter: 20 }); // setsate() 中，已存在但沒被寫到的 state 不會被移除，不存在的 state 會被建立。
    this.setState({ counter: undefined }); // 移除 state 須把其設定為 undefines。
    let a = 5;
    this.setState({ a }); // 如目前 state 有 a，則更改其值，否則創造一個為 a 的 state。

    // state 內宣告之物件，修改時不能單獨修改物件的單一屬性。
    this.setState({
      textStyle: {
        color: "#aaff00",
        fontSize: this.state.textStyle.fontSize,  // 如需保留其值可從 state 內取值。
      },
    });
  }

  render() {
    return (
      <div style={this.styleArg}>
        <button onClick={this.changeState}>{this.props.children}</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default ClassTutorial;
