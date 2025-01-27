import * as React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputToggle } from './types';
import { ErrorMessage } from '../ErrorMessage';
import Text from '../Text';

const InputToggleLayout: React.FC<IInputToggle> = (props) => {
  const {
    name = '', size = 'medium', className, type, checked, disabled, value, children, title, control,
    onChange, onFocus, errorMessage, placeholder, label, controlled, reverse, fullWidth, ...rest
  } = props;
  const classes = useStyles(props);
  
  return (
    <div className={classNames(classes.inputToggleLayout, {
      [classes.disabled]: disabled,
    }, className)}>
      <label className={classNames(classes.container, {
        [classes.reverse]: reverse,
        [classes.fullWidth]: fullWidth
      })}>
        <input
          {...rest}
          type={type}
          className={classes.input}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onFocus={onFocus}
        />
        {control}
        <div className={classes.text}>
          {title &&
            <Text
              variant="labelHighlight"
              className={classNames(
                classes.title,
                classes[size],
                {
                  [classes.textDisabled]: disabled,
                }
              )}
            >
              {title}
            </Text>
          }
          {label && typeof label == 'string'
            ? (
              <Text
                variant="label"
                className={classNames(
                  classes.label,
                  classes[size],
                  {
                    [classes.textDisabled]: disabled,
                  }
                )}
              >
                {label}
              </Text>
            )
            : label
          }
        </div>
      </label>
      {errorMessage && <ErrorMessage text={errorMessage} className={classes.error}/>}
    </div>
  );
};

InputToggleLayout.defaultProps = {
  type: 'checkbox',
  size: 'medium',
  color: 'primary',
  checked: false,
  disabled: false,
}

export default InputToggleLayout;
