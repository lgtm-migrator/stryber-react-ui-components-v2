import { createStyles } from '../../Theme';
import toRem from '../../../utils/toRem'


export default createStyles((theme) => ({
  listItem: {
    padding: [toRem(20), toRem(8)],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: theme.text.secondary,
  },
  subtitle: {
    color: theme.text.hint,
  },
  listItemText: {
    display: 'block',
  },
  leftContent: {
    marginRight: toRem(16),
  },
  rightContent: {
    marginLeft: toRem(16),
  },
}), { internalUsage: true });
