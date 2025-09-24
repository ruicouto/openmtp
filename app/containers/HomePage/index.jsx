import React, { PureComponent, Fragment } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import FileExplorer from './components/FileExplorer';
import ToolbarAreaPane from './components/ToolbarAreaPane';
import { styles } from './styles';
import Onboarding from '../Onboarding';
import { DEVICE_TYPE, MTP_MODE } from '../../enums';
import {
  makeMtpMode,
  makeShowLocalPane,
  makeShowLocalPaneOnLeftSide,
} from '../Settings/selectors';
import SidebarShortcuts from './components/SidebarShortcuts';

class Home extends PureComponent {
  RenderLocalPane = () => {
    const { classes: styles } = this.props;

    return (
      <div className={styles.splitPane}>
        <ToolbarAreaPane showMenu deviceType={DEVICE_TYPE.local} />
        <FileExplorer hideColList={[]} deviceType={DEVICE_TYPE.local} />
      </div>
    );
  };

  RenderMtpPane = () => {
    const { classes: styles, showLocalPane, mtpMode } = this.props;

    return (
      <div
        className={classnames(styles.splitPane, {
          [styles.singlePane]: !showLocalPane,
        })}
      >
        <ToolbarAreaPane showMenu={false} deviceType={DEVICE_TYPE.mtp} />
        <FileExplorer
          hideColList={mtpMode === MTP_MODE.legacy ? ['size'] : []}
          deviceType={DEVICE_TYPE.mtp}
        />
      </div>
    );
  };

  render() {
    const {
      classes: styles,
      showLocalPane,
      showLocalPaneOnLeftSide,
    } = this.props;

    const { RenderLocalPane, RenderMtpPane } = this;

    let panes = [];

    if (showLocalPane) {
      panes.push(<RenderLocalPane key={DEVICE_TYPE.local} />);
    }

    panes.push(<RenderMtpPane key={DEVICE_TYPE.mtp} />);

    if (!showLocalPaneOnLeftSide) {
      panes = panes.reverse();
    }

    return (
      <Fragment>
        <Onboarding />
        <div className={styles.root}>
          <div className={styles.layout}>
            <div className={styles.sidebar}>
              <SidebarShortcuts />
            </div>
            <div className={styles.content}>
              <div className={styles.grid}>{panes}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLocalPane: makeShowLocalPane(state),
    mtpMode: makeMtpMode(state),
    showLocalPaneOnLeftSide: makeShowLocalPaneOnLeftSide(state),
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Home));
