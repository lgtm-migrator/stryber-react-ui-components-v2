import React from 'react';
import useStyles from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { HintMessage } from '../HintMessage';
import classNames from 'classnames';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string,
  placeholder?: string,
  disabled?: boolean,
  color?: 'primary' | 'secondary',
  hint?: string,
  errorMessage?: string,
  value?: string,
  name?: string,
  controlled?: boolean,
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

export const Input = (props: IInput) => {
  const {
    value = '',
    label,
    placeholder,
    onChange,
    hint,
    errorMessage,
    disabled,
    name,
    controlled,
  } = props;
  const classes = useStyles(props);
  const [internalValue, setInternalValue] = React.useState(value);

  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    if (disabled) {
      return null;
    }
    const { value } = e.target;
    setInternalValue(value);
    onChange && onChange(e);
  };

  return (
    <div className={classNames(classes.container, {
      [classes.containerDisabled]: disabled,
      [classes.containerError]: !!errorMessage,
    })}>
      <div className={classNames(classes.label, {[classes.textDisabled]: disabled})}>
        {label}
      </div>
      <input
        name={name}
        value={controlled ? value : internalValue}
        className={classNames(classes.input, {[classes.textDisabled]: disabled})}
        placeholder={placeholder}
        onChange={onChangeWrapper}
      />
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.message}/>}
      {hint && <HintMessage text={hint} disabled={disabled} className={classes.message}/>}
    </div>
  );
};

Input.defaultProps = {
  color: 'primary',
}

export default {
  Input,
}