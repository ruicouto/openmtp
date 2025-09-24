import { mixins } from '../../../styles/js';

export const styles = (theme) => ({
  wrapper: {},
  itemWrapper: {
    float: 'left',
    width: 90,
    height: 108,
    margin: '6px 8px',
    padding: '8px 4px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.12s ease-out',
    userSelect: 'none',
    position: 'relative',
    '&:hover:not($itemSelected)': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    '&:active:not($itemSelected)': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },
  },
  itemCheckBox: {
    display: `none`,
  },
  fileTypeIcon: {
    width: 'auto',
    height: 52,
    filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.12))',
  },
  fileTypeIconWrapper: {
    ...mixins({ theme }).center,
    paddingTop: 6,
    paddingBottom: 4,
    textAlign: 'center',
    height: 62,
  },
  itemSelected: {
    backgroundColor: '#007AFF !important',
    color: 'white !important',
    boxShadow: '0 0 0 1px rgba(0, 122, 255, 0.3) !important',
    '& $itemFileName': {
      color: 'white !important',
    },
    '&:hover': {
      backgroundColor: '#0056CC !important',
    },
  },
  itemFileName: {
    wordBreak: `break-word`,
    textAlign: `center`,
    fontSize: '11px !important',
    lineHeight: '1.3 !important',
    fontWeight: '400 !important',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important',
    color: '#1d1d1f',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  itemFileNameWrapper: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 0,
    textAlign: `center`,
    height: 30,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 2,
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
});
