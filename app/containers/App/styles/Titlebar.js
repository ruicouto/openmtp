import { mixins } from '../../../styles/js';

export const styles = (theme) => {
  return {
    root: {
      width: `100%`,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px',
      background: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.fileExplorerThinLineDividerColor}`,
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      backdropFilter: 'saturate(180%) blur(20px)',
      ...mixins({ theme }).appDragEnable,
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      minWidth: 120,
      height: '100%',
      // interactive area should not drag window
      WebkitAppRegion: 'no-drag',
    },
    center: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      pointerEvents: 'none',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 8,
      minWidth: 160,
      height: '100%',
      WebkitAppRegion: 'no-drag',
    },
    deviceInfo: {
      color: theme.palette.lightText1Color,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '14px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    deviceModel: {
      textTransform: 'capitalize',
    },
  };
};
