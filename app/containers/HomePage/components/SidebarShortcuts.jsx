import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { PATHS } from '../../../constants/paths';
import { DEVICE_TYPE } from '../../../enums';
import { listDirectory, setFocussedFileExplorerDeviceType } from '../actions';
import { makeHideHiddenFiles, makeShowLocalPane } from '../../Settings/selectors';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.text.secondary,
    padding: '8px 12px',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: 6,
    margin: '2px 6px',
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  itemActive: {
    background: theme.palette.action.selected,
  },
  icon: {
    width: 18,
    textAlign: 'center',
    marginRight: 10,
    opacity: 0.9,
  },
  label: {
    fontSize: 13,
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const shortcuts = [
  { key: 'root', label: 'All Files', path: '/' , icon: '🖥️'},
  { key: 'home', label: 'Home', path: PATHS.homeDir , icon: '🏠'},
  { key: 'desktop', label: 'Desktop', path: PATHS.desktopDir , icon: '🗂️'},
  { key: 'downloads', label: 'Downloads', path: PATHS.downloadsDir , icon: '⬇️'},
];

function SidebarShortcuts(props) {
  const { classes, hideHiddenFiles, showLocalPane } = props;

  const onNavigate = (targetPath) => {
    if (!showLocalPane) {
      // If local pane is hidden, do nothing for now.
      return;
    }

    props.actionCreateSetFocusLocal();
    props.actionCreateListDirectory(
      {
        filePath: targetPath,
        ignoreHidden: hideHiddenFiles[DEVICE_TYPE.local],
      },
      DEVICE_TYPE.local
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.sectionTitle}>Favorites</div>
      {shortcuts.map((s) => (
        <div
          key={s.key}
          className={classnames(classes.item)}
          onClick={() => onNavigate(s.path)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onNavigate(s.path);
          }}
        >
          <span className={classes.icon}>{s.icon}</span>
          <span className={classes.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  hideHiddenFiles: makeHideHiddenFiles(state),
  showLocalPane: makeShowLocalPane(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      actionCreateListDirectory:
        ({ ...data }, deviceType) =>
        (_, getState) => {
          dispatch(listDirectory({ ...data }, deviceType, getState));
        },
      actionCreateSetFocusLocal:
        () =>
        () => {
          dispatch(
            setFocussedFileExplorerDeviceType({
              accelerator: DEVICE_TYPE.local,
              value: DEVICE_TYPE.local,
            })
          );
        },
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SidebarShortcuts));
