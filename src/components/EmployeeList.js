import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList,View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeesFetch();
  }
  render() {
    console.log('a',this.props);
    return (
      <View>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.employees,'this sparta');
  const employees = _.map(state.employees,(val,uid)=>{
    return {...val,uid};
  });

  return {employees};
};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);
