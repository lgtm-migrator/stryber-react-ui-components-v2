import React, { useState } from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import * as yup from 'yup';
import { defaultTheme } from '../../../../components/Theme';

const FormDisabledSubmitButton = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Form
      onSubmit={(formData: any) => {
        console.log('onSubmit: ', formData);
      }}
      onChange={(formData: any, { isValid }) => {
        setDisabled(!isValid);
      }}
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>
        isValid from formActions
      </h2>
      <Input name="email" placeholder="Email" label="Email" />
      <h1> </h1>
      <Input name="password" placeholder="Password" label="Password" />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label="Submit" type="submit" disabled={disabled}/>
        <Button label="Reset" type="reset" variant="outlined"/>
      </div>
    </Form>
  );
};

export default FormDisabledSubmitButton;

export const FormDisabledSubmitButtonCode = `
const FormDisabledSubmitButton = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Form
      onSubmit={(formData: any) => {
        console.log('onSubmit: ', formData);
      }}
      onChange={(formData: any, { isValid }) => {
        setDisabled(!isValid);
      }}
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.primary.main }}>
        isValid from formActions
      </h2>
      <Input name="email" placeholder="Email" label="Email" />
      <h1> </h1>
      <Input name="password" placeholder="Password" label="Password" />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button label="Submit" type="submit" disabled={disabled}/>
        <Button label="Reset" type="reset" variant="outlined"/>
      </div>
    </Form>
  );
};
`
