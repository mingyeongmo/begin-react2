import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {

    static defaultProps = { // data가 없을때의 초기값.
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list');
        
        const list = data.map(
            // data가 배열인데 data안에 있는 info를 PhoneInfo한테 전달
            info => (
            <PhoneInfo
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info}
                key={info.id} // 고유의 값을 넣어줘야...음..
                />)
        );
        return (
            <div>
                {list} {/*렌더링*/}
            </div>
        )
    }
}
