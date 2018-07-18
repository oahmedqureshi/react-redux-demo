import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addExpense } from './action/addExpense';
//import { editExpense } from './action/editExpense';
import { setText } from './action/setText';
import { getVisibleExpense } from './selectors';

const Item = (props) => {
  return (
    <div>
      <p>{props.expense.name}</p>
    </div>
  )
}

const FilterTextComponent = (props) => {
  return (
    <input type='text' value={props.filter.text} onChange={(e)=>{
      props.dispatch(setText(e.target.value))
    }}/>
  )
}

class App extends Component {
  componentDidMount(){
    this.props.dispatch(addExpense({name:'owais',account:21}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterTextComponent filter={this.props.filter} dispatch={this.props.dispatch}/>
        {this.props.expenses.map((expense,i)=>{
          return <Item key ={i} expense={expense}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpense(state.expenses, state.filter),
    filter: state.filter
  }
}


export default connect(mapStateToProps)(App);
