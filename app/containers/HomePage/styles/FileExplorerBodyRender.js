import { mixins } from '../../../styles/js';

export const styles = (theme) => ({
  root: {
    width: '100%',
    ...mixins({ theme }).noselect,
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.06)',
  },
  tableWrapper: {
    ...mixins({ theme }).noOutline,
    height: `calc(100vh - 120px)`,
    overflowY: 'auto',
    overflowX: 'auto',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    // Custom scrollbar styling for macOS look
    '&::-webkit-scrollbar': {
      width: '12px',
      height: '12px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
      borderRadius: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      borderRadius: '6px',
      border: '2px solid transparent',
      backgroundClip: 'content-box',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
    [`&.onHoverDropZone`]: {
      backgroundColor: '#E3F2FD',
      border: '2px dashed #2196F3',
      borderRadius: '10px',
    },
    [`&.statusBarActive`]: {
      height: `calc(100vh - 150px) !important`,
    },
  },
});
