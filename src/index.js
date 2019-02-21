// 我们在文件头部从 react 的包当中引入了 React 和 React.js 的组件父类 Component。
// 记住，只要你要写 React.js 组件，那么就必须要引入这两个东西。
import React, { Component } from 'react'
// ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。
import ReactDOM from 'react-dom'
import './index.css'

// 自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。
class Title extends Component{
    render(){
        return(
            <span>这是渲染嵌套的结果!</span>
        )
    }
}

// setState 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state
// 并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
class ButtonLike extends Component{
    // dianJi 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。
    // 这个组件的 render 函数内，会根据组件的 state dianJi“取消”或“点赞”内容。
    constructor(){
        super()
        this.state = {
            dianJi: false
        }
    }

    // 更新组件的状态 state,一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数作为参数。
    // 调用 setState 的时候，React.js 并不会马上修改 state。
    // 而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中
    // 可以看到状态并不会立刻发生变化，而是结束函数后才变化
    onclickHandler(){
        console.log(this.state.isLiked)
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked)
    }
    // Prevstate是函数形参，传进去的是该类的state参数
    onclickOtherHandler(){
        this.setState((Prevstate)=>{
            return {count: 0}
        })

        this.setState((Prevstate)=>{
            return {count:Prevstate.count+1}
        })

        this.setState((Prevstate)=>{
            return {count: Prevstate.count+2}
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.onclickHandler.bind(this)}>
                    {this.state.dianJi ? "点击" : "取消"}
                </button>
                <button onClick={this.onclickOtherHandler.bind(this)}>
                    {this.state.count}
                </button>
            </div>


        )
    }
}

class Buttonprops extends Component{
    constructor(){
        super()
        this.state={
            isLiked: false
        }
    }

    ButtonPropsHandler(){
     this.setState(
         {isLiked: !this.state.isLiked})
    }

    render(){
        const likedText = this.props.likedText || "取消"
        const unLikedText=this.props.unLikedText || "点赞"
        return(
            <div>
                <button onClick={this.ButtonPropsHandler.bind(this)}>
                    {this.state.isLiked ? likedText : unLikedText}
                </button>
            </div>
        )
    }
}

class Header extends Component {
    // 函数写在render外面，可以直接在return 下使用{}来使用该函数
    renderGoodWord(goodWord,badWord){
        const isGoodWord = true
        return isGoodWord ? goodWord : badWord
    }

    clickExample(){
        console.log('点击后出现的数据!')
    }

    clickEventExample(ev){
        console.log(ev.target.innerHTML)
    }

    handleClickOnTitle(e){
        console.log(this)
    }
    handleClickOnTitle2(word,e){
        console.log(this,word)
    }

    // render()相当于主函数
    render () {
        // 可以直接引用js语句。
        const testnum=3
        const className = 'header'
        const word = 'be good!'
        const isGoodWord=true
        const stronghtml=<strong>把元素标签写在js变量上面。</strong>
        const title=<h1 className="ScriptOJ">直接把title这个变量里面直接插入page变量里面！</h1>
        const page=<div>{title}</div>

        return (
            //{} 内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等，所以也可以放 JSX。
            // 表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上
            //React.js 中定义了一种新的方式：className 来帮助我们给元素添加类名。
            <div className={className}>

                <h1>Vejoe learn react now, I will {word}</h1>
                {
                    isGoodWord ? <strong>It is so good!</strong> : <span>It is not good!</span>
                }
                <br/>
                {
                    // 可以写成把某些元素符合条件则显示否则隐藏
                    isGoodWord ? <strong>符合条件显式!</strong> : null
                }
                <br/>
                {
                    // 把元素标签写在js变量上面。
                    isGoodWord ? stronghtml : null
                }
                <br/>
                {
                    this.renderGoodWord("调用函数返回一个值" , null)
                }
                <br/>
                {
                    //可以在里面调用变量还需要{}
                    testnum>0 ?<span>有{testnum}条消息</span> : <span>没有消息</span>
                }
                <br/>
                {page}
                <br/>
                {
                // class嵌套
                <h4>嵌套后：<Title/></h4>
                }
                <br/>
                {
                //点击事件实例
                    <h3 onClick={this.clickExample}>（点击事件实现）</h3>
                }
                <br/>
                {
                    // 传进监听函数中的event对象
                    <h3 onClick={this.clickEventExample}>（点击事件:穿监听函数的event对象）</h3>
                }
                {
                    // 如果你想在事件函数当中使用当前的实例，
                    // 你需要手动地将实例方法 bind 到当前实例上再传入给 React.js。
                    <h3 onClick={this.handleClickOnTitle.bind(this)}>（点击事件:把事件监听方法中的 this 绑定到当前组件实例上）</h3>
                }
                {
                    //监听事件绑定组件加上传参数进函数里。
                    <h3 onClick={this.handleClickOnTitle2.bind(this,'123123')}>（点击事件:监听事件绑定组件加上传参数进函数里）</h3>
                }
                <br/>
                <ButtonLike/>
                <br/>
                <Buttonprops likedText="喜欢"  unLikedText="讨厌"/>

            </div>
        )
    }
}
// ReactDOM.render 功能就是把组件渲染并且构造 DOM 元素
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)