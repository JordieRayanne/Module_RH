import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledSelect = styled(Form.Select)`
  margin-top: 10px;
`;

const StyledNumericInput = styled(NumericInput)`
  width: 100%;
`;

function FormComponent() {
  const [select1Value, setSelect1Value] = useState('');
  const [select2Value, setSelect2Value] = useState('');
  const [input1Value, setInput1Value] = useState(0);
  const [input2Value, setInput2Value] = useState(0);
  const [input3Value, setInput3Value] = useState(0);

  const handleSelect1Change = (event) => {
    setSelect1Value(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2Value(event.target.value);
  };

  return (
    <StyledForm>
      <Form.Group controlId="select1">
        <Form.Label>Select 1</Form.Label>
        <StyledSelect value={select1Value} onChange={handleSelect1Change}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </StyledSelect>
      </Form.Group>

      {select1Value === 'option1' && (
        <Form.Group controlId="input1">
          <Form.Label>Input 1</Form.Label>
          <StyledNumericInput value={input1Value} onChange={setInput1Value} />
        </Form.Group>
      )}

      {select1Value === 'option2' && (
        <Form.Group controlId="select2">
          <Form.Label>Select 2</Form.Label>
          <StyledSelect value={select2Value} onChange={handleSelect2Change}>
            <option value="">Select an option</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </StyledSelect>
        </Form.Group>
      )}

      {select2Value === 'option3' && (
        <Form.Group controlId="input2">
          <Form.Label>Input 2</Form.Label>
          <StyledNumericInput value={input2Value} onChange={setInput2Value} />
        </Form.Group>
      )}

      {select2Value === 'option4' && (
        <Form.Group controlId="input3">
          <Form.Label>Input 3</Form.Label>
          <StyledNumericInput value={input3Value} onChange={setInput3Value} />
        </Form.Group>
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </StyledForm>
  );
}

export default FormComponent;
