import { createStyles } from '../Theme';
import { ISlider } from './index';
import toRem from '../../utils/toRem';


export default createStyles( (theme) => ({
  sliderRoot: {
    fontFamily: theme.font,
    fontWeight: 600,
    fontSize: toRem(12),
    height: toRem(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:not($disabled)': {
      '$thumb:hover': {
        zIndex: 6,
      },
      '& $thumbLabel$show': {
        display: 'flex',
      },
      '& $thumbInput$show': {
        display: 'block',
      }
    }
  },
  thumb: {
    backgroundColor: theme.background.default,
    border: 'none',
    borderRadius: '50%',
    boxShadow: `0 0 ${toRem(4)} 0 #00000040`,
    cursor: 'pointer',
    height: toRem(30),
    width: toRem(30),
    position: 'absolute',
    top: toRem(-13),
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    touchAction: 'none',
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  disabled: {
    '& $thumb': {
      backgroundColor: theme.default.light,
    },
    '& $sideLabel, $sliderRange, $dotsContainer': {
      backgroundColor: theme.default.main,
      color: '#E3E8EE',
    },
    '& $sliderTrack, $sliderRange, $thumb': {
      cursor: 'auto',
    }
  },
  thumbLabel: {
    position: 'relative',
    bottom: toRem(34),
    width: 'fit-content',
    color: theme.primary.contrast,
    fontSize: toRem(12),
    height: toRem(16),
    padding: `${toRem(2)} ${toRem(4)}`,
    backgroundColor: theme.default.dark,
    borderRadius: toRem(4),
    display: 'none',
    alignItems: 'center',
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  thumbInput: {
    position: 'relative',
    bottom: toRem(42),
    zIndex: 5,
    margin: '0 auto',
    fontSize: toRem(14),
    fontWeight: 600,
    color: theme.text.hint,
    width: 'fit-content',
    display: 'none',
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
    '&>div': {
      width: 'fit-content',
    },
    '&>div>div': {
      height: toRem(34),
      padding: 0,
      width: 'fit-content',
    },
    '& $input': {
      minWidth: toRem(13),
      textAlign: 'center',
      padding: `${toRem(8)} ${toRem(5.5)}`,
      lineHeight: toRem(16),
      height: '-webkit-fill-available',
      borderRadius: toRem(4),
      border: 'none',
    },
  },
  slider: {
    position: 'relative',
    width: '100%',
    height: toRem(4),
  },
  sliderTrack: {
    position: 'absolute',
    borderRadius: toRem(3),
    height: toRem(4),
    backgroundColor: theme.default.main,
    width: '100%',
    zIndex: 1,
    cursor: 'pointer',
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  sliderRange: (props: ISlider) => ({
    position: 'absolute',
    borderRadius: toRem(3),
    height: toRem(4),
    backgroundColor: theme[props.color!].main,
    opacity: 0.6,
    zIndex: 2,
    cursor: 'pointer',
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  }),
  sideLabel: {
    color: theme.primary.contrast,
    fontSize: toRem(12),
    lineHeight: toRem(16),
    padding: `${toRem(2)} ${toRem(4)}`,
    margin: `0 ${toRem(8)}`,
    backgroundColor: theme.default.dark,
    borderRadius: toRem(4),
    '-webkit-touch-callout': 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  sideIconLabel: {
    margin: `0 ${toRem(8)}`,
  },
  show: {
    '&$error>div>div:not(inputContainerError)': {
      borderColor: theme.error.main,
    },
    '&$error>div>div:focus-within:not(inputContainerError)': {
      borderColor: theme.error.main,
    },
  },
  error: {
    '&>div>div:not(inputContainerError)': {
      borderWidth: toRem(1),
      borderStyle: 'solid',
      borderColor: theme.error.main,
    }
  },
  dotsContainer: {
    position: 'absolute',
    width: '100%',
    height: toRem(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3,
  },
  dot: {
    width: toRem(4),
    height: toRem(4),
    borderRadius: toRem(2),
    backgroundColor: theme.default.light,
  },
}), { internalUsage: true })
