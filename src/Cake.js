import React, { Component } from 'react'

 class Cake extends Component {
    state =
    {
        price: 10000,
        sale: 0
    }

    sale = () => {
        console.log('30% 할인가 계산');
        this.setState({sale : this.state.price * 0.7});
      }

    render() {
        return (
        <div>
            <h1>가격: {this.state.price}원</h1>
            <button onClick={this.sale}>30% 할인</button>
            <h2>할인가: {this.state.sale}원</h2>
        </div>
        )
  }
}

export default Cake;