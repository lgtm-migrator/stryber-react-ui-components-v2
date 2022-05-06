import { createStyles } from '../../styles';
import { ITextLink } from './index';

export default createStyles((theme) => ({
  textLink: (props: ITextLink) =>  ({
    padding: [8, 16],
    color: theme[props.color!].main,
    fontSize: 16,
    lineHeight: '24px',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: theme.font,
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    '& svg path': {
      fill: theme[props.color!].main,
    },
    '&:visited svg path': {
      fill: theme[props.color!].dark,
    },
    '&:visited': {
      color: theme[props.color!].dark,
    },
    '&:hover': {
      backgroundColor: theme[props.color!].light,
    },
    '&:active': {
      outline: `2px solid ${theme[props.color!].light}`,
      outlineOffset: -2,
      backgroundColor: 'transparent',
    },
  }),
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
    cursor: 'default',
  },
}));
