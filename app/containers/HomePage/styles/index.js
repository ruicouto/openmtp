export const styles = (_) => {
  return {
    root: {},
    layout: {
      display: `flex`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
    },
    sidebar: {
      width: 220,
      minWidth: 200,
      maxWidth: 260,
      borderRight: `1px solid rgba(0,0,0,0.08)`,
      height: `calc(100vh - 48px)`,
      overflowY: `auto`,
      overflowX: `hidden`,
      background: `rgba(0,0,0,0.02)`,
    },
    content: {
      flex: 1,
      height: `calc(100vh - 48px)`,
      overflow: `hidden`,
    },
    grid: {
      width: `100%`,
    },
    splitPane: {
      width: `50%`,
      float: `left`,
      [`&:after`]: {
        content: '""',
        display: `table`,
        clear: `both`,
      },
    },
    singlePane: {
      width: `100% !important`,
    },
  };
};
