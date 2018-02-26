import _ from 'lodash';
import React, { Component } from 'react';
import { CardSection, Card, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee,(value, prop)=> {
      this.props.employeeUpdate({prop,value}) ;
    });
    console.log('bubu',this.props);
  }
  onButtonPress(){
    const { name, phone, shift } = this.props;
    console.log(name,phone,shift);
  }
  render(){
    return(
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  const {name,phone,shift} = state.employeeForm;
  return  {name, phone, shift };
}
export default connect(mapStateToProps, {employeeUpdate}) (EmployeeEdit);
