import React, { Component } from 'react'

export default class PhoneForm extends Component {

    input = React.createRef();

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => { // 이벤트 객체
        this.setState({
            [e.target.name]: e.target.value
            // : e.target = input, value = setstate를 통해 설정.
            // : [e.target.name] = input의 name값이 들어감.
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 원래해야할 작업을 안함(새로고침 방지)
        this.props.onCreate(this.state); // onCreate 함수 호출
        this.setState ({ // 실행하면 기존의 인풋값들을 초기화
            name: '',
            phone: '',
        });
        this.input.current.focus(); 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name" 
                    placeholder="이름" // 아무것도 입력되지 않았을때 기본적으로 보이는 값
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={this.input}
                    />
                <input
                name="phone"
                placeholder="전화번호"
                onChange={this.handleChange}
                value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}


