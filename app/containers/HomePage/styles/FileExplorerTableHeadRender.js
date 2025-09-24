export const styles = (theme) => ({
  tableHeadCell: {
    border: `none`,
    backgroundColor: '#f5f5f7',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    fontSize: '12px',
    fontWeight: '500',
    color: '#1d1d1f',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '8px 12px',
    '& .MuiTableSortLabel-root': {
      fontSize: '12px',
      fontWeight: '500',
      color: '#1d1d1f',
      '&:hover': {
        color: '#007AFF',
      },
      '&.MuiTableSortLabel-active': {
        color: '#007AFF',
      },
    },
    '& .MuiCheckbox-root': {
      padding: '4px',
      '& .MuiSvgIcon-root': {
        fontSize: '18px',
      },
    },
  },
});
