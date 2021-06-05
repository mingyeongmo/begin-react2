import React, { Component } from 'react';

class Myname extends Component {

    static defaultProps = {
        name: '기본이름'
    }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        )
    }
}

// Myname.defaultProps = {
//     name: '민경모'
// };

export default Myname;