import { createStyles } from '../Theme';
import { IInput } from './index';

export default createStyles((theme) => ({
  root: {
    width: 320,
  },
  fullWidth: {
    width: '100%',
  },
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    borderRadius: 4,
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    padding: '5px 8px',
    backgroundColor: theme.background.default,
    '&:focus-within:not($inputContainerError)': {
      border: `1px solid ${theme[props.color!].main}`,
      outline: `4px solid ${theme[props.color!].light}`,
    },
    '&:not($inputContainerError)': {
      border: `1px solid ${theme.default.main}`,
    },
    '&$withLabel': {
      height: 44,
    }
  }),
  inputContainerError: {
    border: `1px solid ${theme.error.main}`,
    '&:focus-within': {
      outline: `4px solid ${theme.error.light}`,
    },
  },
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: 17,
    padding: 0,
    width: '100%',
    color: theme.text.primary,
    fontSize: 14,
    backgroundColor: theme.background.default,
    '&::placeholder': {
      color: theme.text.hint,
    }
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  prefix: {
    paddingTop: 17,
    fontSize: 14,
    color: theme.text.primary,
    backgroundColor: theme.background.default,
    whiteSpace: 'nowrap',
  },
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.background.default,
  },
  label: {
    color: theme.text.secondary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 17,
    fontSize: 14,
  },
  textDisabled: {
    color: theme.text.disabled,
    '&::placeholder': {
      color: theme.text.disabled,
    }
  },
  message: {
    marginTop: 8,
  },
  withLabel: {},
}));
