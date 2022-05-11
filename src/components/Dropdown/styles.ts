import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  dropdown: {
    width: 320,
    position: 'relative',
    display: 'inline-flex',
  },
  overlay: {
    position: 'fixed',
    zIndex: 98,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    backgroundColor: theme.background.default,
    position: 'absolute',
    zIndex: 99,
    border: `1px solid ${theme.default.main}`,
    borderRadius: 4,
    top: '100%',
    marginTop: 8,
    width: '100%',
    padding: 8,
    boxSizing: 'border-box',
  },
  toggleIcon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    transition: 'transform 0.3s',
    '& svg path': {
      fill: theme.default.dark,
    },
  },
  toggleIconOpened: {
    transform: 'rotate(180deg)',
  },
  toggleIconDisabled: {
    '& svg path': {
      fill: theme.text.disabled,
    },
  },
  input: {
    width: '100%',
    zIndex: 99,
    '&:not($inputDisabled)': {
      cursor: 'pointer',
      '& input': {
        cursor: 'pointer',
      },
    }
  },
  inputDisabled: {}
}), { index: 1 });
