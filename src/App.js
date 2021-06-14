import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  id = 3; // id값은 렌더링되는것이 아니라서 state에 넣을 필요가 없다.

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '김민준',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '민경모',
        phone: '010-0000-0003'
      }
    ],
    keyword: '',
  }

  handleChange = (e) => { //이벤트 객체
    this.setState({
      keyword: e.target.value,
    })
  }
  
  handleCreate = (data) => {
    const { information } = this.state; // 비구조화를 통해 39번째줄 코드를 줄임
    this.setState({
      information: information.concat({ // 기존의 배열에 추가
        ...data,  // id값 1씩증가
        id: this.id++ // 현재 id값 넣기
      })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/> {/* PhoneForm에 onCreate값 넣기 */}
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..." 
          />
        <PhoneInfoList
          data={this.state.information.filter( 
            info => info.name.indexOf(this.state.keyword) > -1
          )} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    )
  }
}

export default App;
