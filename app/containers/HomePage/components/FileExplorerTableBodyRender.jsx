import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import FileExplorerTableHeadRender from './FileExplorerTableHeadRender';
import FileExplorerTableEmptyRowRender from './FileExplorerTableBodyEmptyRender';
import FileExplorerTableBodyGridWrapperRender from './FileExplorerTableBodyGridWrapperRender';
import FileExplorerTableBodyListWrapperRender from './FileExplorerTableBodyListWrapperRender';
import { styles } from '../styles/FileExplorerTableBodyRender';
import { DEVICE_TYPE, FILE_EXPLORER_VIEW_TYPE } from '../../../enums';

class FileExplorerTableBodyRender extends PureComponent {
  isSelected = (path) => {
    const { directoryLists, deviceType } = this.props;
    const _directoryLists = directoryLists[deviceType].queue.selected;

    return _directoryLists.indexOf(path) !== -1;
  };

  ListingSwitcher = (type = FILE_EXPLORER_VIEW_TYPE.grid) => {
    const { deviceType, directoryLists, tableSort } = this.props;
    const { nodes, order, orderBy } = directoryLists[deviceType];
    const _eventTarget = 'tableCellTarget';

    // eslint-disable-next-line  no-unused-vars
    const { classes, ...parentProps } = this.props;

    switch (type) {
      case FILE_EXPLORER_VIEW_TYPE.list:
        return (
          <FileExplorerTableBodyListWrapperRender
            {...parentProps}
            tableSort={tableSort({
              nodes,
              order,
              orderBy,
            })}
            _eventTarget={_eventTarget}
            isSelected={this.isSelected}
          />
        );

      case FILE_EXPLORER_VIEW_TYPE.grid:
      default:
        return (
          <FileExplorerTableBodyGridWrapperRender
            {...parentProps}
            tableSort={tableSort({
              nodes,
              order,
              orderBy,
            })}
            _eventTarget={_eventTarget}
            isSelected={this.isSelected}
          />
        );
    }
  };

  render() {
    const {
      classes: styles,
      deviceType,
      fileExplorerListingType,
      hideColList,
      currentBrowsePath,
      directoryLists,
      mtpDevice,
      onSelectAllClick,
      onRequestSort,
      onContextMenuClick,
      onIsDraggable,
      onDragStart,
    } = this.props;
    const { nodes, order, orderBy, queue } = directoryLists[deviceType];
    const { selected } = queue;
    const emptyRows = nodes.length < 1;
    const isMtp = deviceType === DEVICE_TYPE.mtp;

    return (
      <Table className={styles.table}>
        {fileExplorerListingType[deviceType] === FILE_EXPLORER_VIEW_TYPE.list && (
          <FileExplorerTableHeadRender
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={onSelectAllClick.bind(this, deviceType)}
            onRequestSort={onRequestSort.bind(this, deviceType)}
            rowCount={nodes ? nodes.length : 0}
            hideColList={hideColList}
          />
        )}
        <TableBody
          draggable={onIsDraggable(deviceType)}
          onDragStart={(event) => {
            onDragStart(event, {
              sourceDeviceType: deviceType,
            });
          }}
        >
          {emptyRows ? (
            <FileExplorerTableEmptyRowRender
              mtpDevice={mtpDevice}
              isMtp={isMtp}
              currentBrowsePath={currentBrowsePath}
              deviceType={deviceType}
              directoryLists={directoryLists}
              onContextMenuClick={onContextMenuClick}
            />
          ) : (
            this.ListingSwitcher(fileExplorerListingType[deviceType])
          )}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(FileExplorerTableBodyRender);
