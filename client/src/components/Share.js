import React, { Component } from 'react';
import { Row, Col, Icon, Form, Button, Input } from 'antd';
import { sellStock } from '../apis';

export default class Share extends Component {
  constructor() {
    super();
    this.state = {
      stockNumber: 0,
    };
  }

  handleSubmit = (e) => {
    console.log('aaaa');
    console.log(this.state.stockNumber);
    e.preventDefault();
    if (this.state.stockNumber > this.props.quantity) {
      alert(
        'You donot have ' + `${this.state.stockNumber}` + ' stocks to sell',
      );
    } else {
      (async () => {
        console.log('maha');
        let res = await sellStock(this.state.stockNumber, this.props.symbol);
        alert(res);
        window.location.reload();
      })();
    }
  };

  render() {
    const { symbol, quantity, openPrice, latestPrice } = this.props;
    let color = null;
    if (openPrice > latestPrice) {
      color = red;
    } else if (openPrice < latestPrice) {
      color = green;
    }
    if (quantity !== 0) {
      return (
        <Row className="share" style={color}>
          <Col span={16}>
            <div>
              {symbol} - {quantity} Shares
            </div>
          </Col>
          <Col span={8}>
            <div className="price">
              {latestPrice ? (
                `$${latestPrice}`
              ) : (
                <Icon type="loading" style={{ fontSize: 24 }} spin />
              )}
            </div>
          </Col>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Input
                size="large"
                placeholder="Number of Stocks"
                value={this.state.stockNumber}
                onChange={(e) => this.setState({ stockNumber: e.target.value })}
              />
              <Button htmlType="submit" block size="large">
                Sell
              </Button>
            </Form>
          </Col>
        </Row>
      );
    }
    return <></>
  }
}

const red = {
  color: 'red',
};

const green = {
  color: 'green',
};
