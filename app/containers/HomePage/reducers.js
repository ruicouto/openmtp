import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faSync,
  faSdCard,
  faCog,
  faPlug,
  faArrowLeft,
  faQuestionCircle,
  faList,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { actionTypes } from './actions';
import { PATHS } from '../../constants/paths';
import {
  DEVICES_DEFAULT_PATH,
  FILE_EXPLORER_DEFAULT_FOCUSSED_DEVICE_TYPE,
} from '../../constants';
import { DEVICE_TYPE } from '../../enums';
import {
  buyMeACoffeeText,
  supportUsingPayPal,
} from '../../templates/fileExplorer';
import { isKalamModeSupported } from '../../helpers/binaries';

export const initialState = {
  focussedFileExplorerDeviceType: {
    accelerator: FILE_EXPLORER_DEFAULT_FOCUSSED_DEVICE_TYPE,
    onClick: FILE_EXPLORER_DEFAULT_FOCUSSED_DEVICE_TYPE,
    value: FILE_EXPLORER_DEFAULT_FOCUSSED_DEVICE_TYPE,
  },

  sidebarFavouriteList: {
    top: [
      {
        label: 'Home',
        path: PATHS.homeDir,
        icon: 'folder',
        enabled: true,
      },
      {
        label: 'Desktop',
        path: PATHS.desktopDir,
        icon: 'folder',
        enabled: true,
      },
      {
        label: 'Downloads',
        path: PATHS.downloadsDir,
        icon: 'folder',
        enabled: true,
      },
      {
        label: 'Removable Disks',
        path: PATHS.volumesDir,
        icon: 'folder',
        enabled: true,
      },
      {
        label: 'Root',
        path: PATHS.systemRootDir,
        icon: 'folder',
        enabled: true,
      },
    ],
    bottom: [],
  },

  toolbarList: {
    [DEVICE_TYPE.local]: {
      up: {
        enabled: true,
        label: 'Folder Up',
        icon: faArrowLeft,
      },
      refresh: {
        enabled: true,
        label: 'Refresh',
        icon: faSync,
      },
      delete: {
        enabled: true,
        label: 'Delete',
        icon: faTrashAlt,
      },
      viewList: {
        enabled: true,
        label: 'List View',
        icon: faList,
      },
      viewGrid: {
        enabled: true,
        label: 'Grid View',
        icon: faTh,
      },
      gitHub: {
        enabled: true,
        label: 'GitHub',
        icon: faGithub,
      },
      settings: {
        enabled: true,
        label: 'Settings',
        icon: faCog,
      },
      faqs: {
        enabled: true,
        label: 'Help - FAQs',
        icon: faQuestionCircle,
      },
    },
    [DEVICE_TYPE.mtp]: {
      up: {
        enabled: true,
        label: 'Folder Up',
        icon: faArrowLeft,
      },
      refresh: {
        enabled: true,
        label: 'Refresh',
        icon: faSync,
      },
      delete: {
        enabled: true,
        label: 'Delete',
        icon: faTrashAlt,
      },
      viewList: {
        enabled: true,
        label: 'List View',
        icon: faList,
      },
      viewGrid: {
        enabled: true,
        label: 'Grid View',
        icon: faTh,
      },
      storage: {
        enabled: true,
        label: 'Storage',
        icon: faSdCard,
      },
      mtpMode: {
        enabled: isKalamModeSupported(),
        label: 'MTP Mode',
        icon: faPlug,
      },
      paypal: {
        enabled: true,
        label: supportUsingPayPal,
        icon: faPaypal,
      },
      buyMeACoffee: {
        enabled: true,
        label: buyMeACoffeeText,
        image: 'toolbar/buymeacoffee.png',
        icon: null,
      },
      settings: {
        enabled: true,
        label: 'Settings',
        icon: faCog,
      },
    },
  },

  directoryLists: {
    [DEVICE_TYPE.local]: {
      order: 'asc',
      orderBy: 'name',
      queue: {
        selected: [],
      },
      nodes: [],
      isLoaded: false,
    },
    [DEVICE_TYPE.mtp]: {
      order: 'asc',
      orderBy: 'name',
      queue: {
        selected: [],
      },
      nodes: [],
      isLoaded: false,
    },
  },

  currentBrowsePath: {
    [DEVICE_TYPE.local]: DEVICES_DEFAULT_PATH.local,
    [DEVICE_TYPE.mtp]: DEVICES_DEFAULT_PATH.mtp,
  },

  mtpDevice: {
    isAvailable: false,
    error: null,
    isLoading: false,

    /**
     * params: {mtpDeviceInfo, usbDeviceInfo} - info
     *
     */
    info: {},
  },

  contextMenuList: {
    [DEVICE_TYPE.local]: {
      rename: {
        enabled: true,
        label: 'Rename',
        data: {},
      },
      copy: {
        enabled: true,
        label: 'Copy',
        data: {},
      },
      copyToQueue: {
        enabled: true,
        label: 'Copy to Queue',
        data: {},
      },
      paste: {
        enabled: true,
        label: 'Paste',
        data: {},
      },
      newFolder: {
        enabled: true,
        label: 'New Folder',
        data: {},
      },
      showInEnclosingFolder: {
        enabled: true,
        label: 'Open in Finder',
        data: {},
      },
    },
    [DEVICE_TYPE.mtp]: {
      rename: {
        enabled: true,
        label: 'Rename',
        data: {},
      },
      copy: {
        enabled: true,
        label: 'Copy',
        data: {},
      },
      copyToQueue: {
        enabled: true,
        label: 'Copy to Queue',
        data: {},
      },
      paste: {
        enabled: true,
        label: 'Paste',
        data: {},
      },
      newFolder: {
        enabled: true,
        label: 'New Folder',
        data: {},
      },
    },
  },

  /**
   * description - MTP Storage list
   *
   *    {
   *      string: { <----- storageId
   *        "name": string,
   *        "selected": boolean,
   *        "info": {} | undefined,
   *      }
   *    }
   *
   */
  mtpStoragesList: {},

  fileTransfer: {
    clipboard: {
      queue: [],
      source: null,
    },
    progress: {
      toggle: false,
      titleText: null,
      bottomText: null,

      /**
       *  [{
       *    percentage,
       *    variant,
       *    bodyText1,
       *    bodyText2,
       *  }]
       */
      values: [],
    },
  },

  filesDrag: {
    sourceDeviceType: null,
    destinationDeviceType: null,
    enter: false,
    lock: false,
    sameSourceDestinationLock: false,
  },
};

export default function Home(state = initialState, action) {
  const { type, payload, deviceType = null } = action;

  switch (type) {
    case actionTypes.SET_FOCUSSED_FILE_EXPLORER_DEVICE_TYPE:
      return {
        ...state,
        focussedFileExplorerDeviceType: {
          ...state.focussedFileExplorerDeviceType,
          ...payload,
        },
      };

    case actionTypes.SET_SORTING_DIR_LISTS:
      return {
        ...state,
        directoryLists: {
          ...state.directoryLists,
          [deviceType]: {
            ...state.directoryLists[deviceType],
            ...payload,
          },
        },
      };

    case actionTypes.SET_SELECTED_DIR_LISTS:
      return {
        ...state,
        directoryLists: {
          ...state.directoryLists,
          [deviceType]: {
            ...state.directoryLists[deviceType],
            queue: {
              selected: payload.selected,
            },
          },
        },
      };

    case actionTypes.SET_CURRENT_BROWSE_PATH:
      return {
        ...state,
        currentBrowsePath: {
          ...state.currentBrowsePath,
          [deviceType]: payload,
        },
      };

    case actionTypes.SET_MTP_STATUS:
      return {
        ...state,
        mtpDevice: {
          ...state.mtpDevice,
          ...payload,
        },
      };

    case actionTypes.LIST_DIRECTORY:
      return {
        ...state,
        directoryLists: {
          ...state.directoryLists,
          [deviceType]: {
            ...state.directoryLists[deviceType],
            nodes: [...payload.nodes],
            isLoaded: payload.isLoaded,
          },
        },
      };

    case actionTypes.CHANGE_MTP_STORAGE:
      return {
        ...state,
        mtpStoragesList: {
          ...initialState.mtpStoragesList,
          ...payload,
        },
      };

    case actionTypes.SET_FILE_TRANSFER_CLIPBOARD:
      return {
        ...state,
        fileTransfer: {
          ...state.fileTransfer,
          clipboard: {
            ...payload,
          },
        },
      };

    case actionTypes.SET_FILE_TRANSFER_PROGRESS:
      return {
        ...state,
        fileTransfer: {
          ...state.fileTransfer,
          progress: {
            ...payload,
          },
        },
      };

    case actionTypes.CLEAR_FILE_TRANSFER:
      return {
        ...state,
        fileTransfer: {
          ...initialState.fileTransfer,
        },
      };

    case actionTypes.SET_FILES_DRAG:
      return {
        ...state,
        filesDrag: {
          ...state.filesDrag,
          ...payload,
        },
      };

    case actionTypes.CLEAR_FILES_DRAG:
      return {
        ...state,
        filesDrag: {
          ...initialState.filesDrag,
        },
      };

    default:
      return state;
  }
}
