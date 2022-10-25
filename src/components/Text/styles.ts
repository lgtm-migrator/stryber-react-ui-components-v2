import { createStyles } from '../Theme';
import { TextVariant } from './';
import toRem from '../Theme/toRem';


export default createStyles((theme) => ({
  text: {
    display: 'inline-block',
    fontFamily: theme.font,
  },
  [TextVariant.h1]: {
    padding: 0,
    margin: 0,
    color: theme.text.primary,
    fontSize: toRem(64),
    fontWeight: '700',
    lineHeight: 1.3,
  },
  [TextVariant.h2]: {
    padding: 0,
    margin: 0,
    color: theme.text.primary,
    fontSize: toRem(56),
    fontWeight: '700',
    lineHeight: 1.3,
  },
  [TextVariant.h3]: {
    padding: 0,
    margin: 0,
    color: theme.text.primary,
    fontSize: toRem(48),
    fontWeight: '700',
    lineHeight: 1.25,
  },
  [TextVariant.h4]: {
    padding: 0,
    margin: 0,
    color: theme.text.primary,
    fontSize: toRem(32),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.subline]: {
    color: theme.text.hint,
    fontSize: toRem(24),
    fontWeight: '600',
    lineHeight: 1.5,
  },
  [TextVariant.body]: {
    color: theme.text.hint,
    fontSize: toRem(16),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.quote]: {
    fontSize: toRem(40),
    fontWeight: '700',
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
  [TextVariant.description]: {
    color: theme.text.hint,
    fontSize: toRem(12),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.caption]: {
    color: theme.text.hint,
    fontSize: toRem(12),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.smallText]: {
    color: theme.text.primary,
    fontSize: toRem(10),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.footnote]: {
    color: theme.text.primary,
    fontSize: toRem(10),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.buttonLabel]: {
    color: theme.text.primary,
    fontSize: toRem(16),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.label]: {
    color: theme.text.hint,
    fontSize: toRem(14),
    fontWeight: '400',
    lineHeight: 1.2,
  },
  [TextVariant.labelHighlight]: {
    color: theme.text.primary,
    fontSize: toRem(14),
    fontWeight: '500',
    lineHeight: 1.5,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}));
