import React, { Component } from 'react';
import {Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input label='Name'
            Placeholder='Jane'
          />
        </CardSection>
        <CardSection>
          <Input label='Phone'
          Placeholder='555-555'
          />
        </CardSection>
        <CardSection></CardSection>
        <Button>Create</Button>
      </Card>
    );
  }
}

 export default EmployeeCreate;
