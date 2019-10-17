import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BudgetItem.scss';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

class BudgetItem extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="BudgetItem">
        <h2>Connect Budget Item Test</h2>
        <Progress percent={30} />
      </div>
    )
  }
}
BudgetItem.propTypes = {
}

export default BudgetItem;