import { createTheme } from '@mui/material';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  components: {
    // Accordion
    MuiAccordion: {},
    // Alert
    MuiAlert: {},
    // App Bar
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          padding: '0'
        }
      }
    },
    // Autocomplete
    MuiAutocomplete: {},
    // Avatar
    MuiAvatar: {},
    // Backdrop
    MuiBackdrop: {},
    // Badge
    MuiBadge: {},
    // Box
    // Breadcrumbs
    MuiBreadcrumbs: {},
    // Button
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: '1rem',
          margin: '1rem'
        }
      }
    },
    MuiButtonBase: {},
    // Button Group
    MuiButtonGroup: {},
    // Button Navigation
    // Card
    MuiCard: {},
    // Checkbox
    MuiCheckbox: {},
    // Chip
    MuiChip: {},
    // Container
    MuiContainer: {},
    // Dialog
    MuiDialog: {},
    // Divider
    MuiDivider: {},
    // Drawer
    MuiDrawer: {},
    // Floating Action Button
    // Grid
    MuiGrid: {},
    // Grid v2
    MuiGrid2: {},
    // Hidden
    // Icons
    MuiIcon: {},
    // Image List
    MuiImageList: {},
    MuiImageListItem: {},
    MuiImageListItemBar: {},
    // Link
    MuiLink: {},
    // List
    MuiList: {},
    MuiListItem: {},
    MuiListItemAvatar: {},
    MuiListItemButton: {},
    MuiListItemIcon: {},
    MuiListItemSecondaryAction: {},
    MuiListItemText: {},
    MuiListSubheader: {},
    // Material Icons
    // Menu
    MuiMenu: {},
    MuiMenuItem: {},
    // Modal
    MuiModal: {},
    // Pagination
    MuiPagination: {},
    MuiPaginationItem: {},
    // Paper
    MuiPaper: {},
    // Popover
    MuiPopover: {},
    // Popper
    MuiPopper: {},
    // Portal
    // Progress
    // Radio Group
    MuiRadio: {},
    // Rating
    MuiRating: {},
    // Select
    MuiSelect: {},
    // Slider
    MuiSlider: {},
    // Snackbar
    MuiSnackbar: {},
    MuiSnackbarContent: {},
    // Skeleton
    MuiSkeleton: {},
    // Speed Dial
    MuiSpeedDial: {},
    MuiSpeedDialAction: {},
    MuiSpeedDialIcon: {},
    // Stack
    MuiStack: {},
    // Stepper
    MuiStepper: {},
    // Switch
    MuiSwitch: {},
    // Table
    MuiTable: {},
    MuiTableBody: {},
    MuiTableCell: {},
    MuiTableContainer: {},
    MuiTableFooter: {},
    MuiTableHead: {},
    MuiTablePagination: {},
    MuiTableRow: {},
    MuiTableSortLabel: {},
    // Tabs
    MuiTab: {},
    MuiTabs: {},
    // Text Field
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          margin: '1rem'
        }
      }
    },
    // Tooltip
    MuiTooltip: {},
    MuiToolbar: {},
    // Transfer List
    // Toggle Button
    MuiToggleButton: {},
    MuiToggleButtonGroup: {},
    // Typography
    MuiTypography: {}
  },
  palette: {
    primary: {
      50: 'hsl(186, 100%, 94%)',
      100: 'hsl(185, 94%, 87%)',
      200: 'hsl(184, 80%, 74%)',
      300: 'hsl(184, 65%, 59%)',
      400: 'hsl(185, 57%, 50%)',
      500: 'hsl(185, 62%, 45%)',
      600: 'hsl(184, 77%, 34%)',
      700: 'hsl(185, 81%, 29%)',
      800: 'hsl(185, 84%, 25%)',
      900: 'hsl(184, 91%, 17%)'
    },
    // secondary: {
    //   50: '',
    //   100: '',
    //   200: '',
    //   300: '',
    //   400: '',
    //   500: '',
    //   600: '',
    //   700: '',
    //   800: '',
    //   900: ''
    // }
    grey: {
      50: 'hsl(216, 33%, 97%)',
      100: 'hsl(214, 15%, 91%)',
      200: 'hsl(210, 16%, 82%)',
      300: 'hsl(211, 13%, 65%)',
      400: 'hsl(211, 10%, 53%)',
      500: 'hsl(211, 12%, 43%)',
      600: 'hsl(209, 14%, 37%)',
      700: 'hsl(209, 18%, 30%)',
      800: 'hsl(209, 20%, 25%)',
      900: 'hsl(210, 24%, 16%)'
    },
    info: {
      50: 'hsl(205, 79%, 92%)',
      100: 'hsl(205, 97%, 85%)',
      200: 'hsl(205, 84%, 74%)',
      300: 'hsl(205, 74%, 65%)',
      400: 'hsl(205, 65%, 55%)',
      500: 'hsl(205, 67%, 45%)',
      600: 'hsl(205, 76%, 39%)',
      700: 'hsl(205, 82%, 33%)',
      800: 'hsl(205, 87%, 29%)',
      900: 'hsl(205, 100%, 21%)'
    },
    success: {
      50: 'hsl(152, 68%, 96%)',
      100: 'hsl(154, 75%, 87%)',
      200: 'hsl(156, 73%, 74%)',
      300: 'hsl(158, 58%, 62%)',
      400: 'hsl(160, 51%, 49%)',
      500: 'hsl(162, 63%, 41%)',
      600: 'hsl(164, 71%, 34%)',
      700: 'hsl(166, 72%, 28%)',
      800: 'hsl(168, 80%, 23%)',
      900: 'hsl(170, 97%, 15%)'
    },
    warning: {
      50: 'hsl(45, 100%, 96%)',
      100: 'hsl(45, 90%, 88%)',
      200: 'hsl(45, 86%, 81%)',
      300: 'hsl(43, 90%, 76%)',
      400: 'hsl(43, 89%, 70%)',
      500: 'hsl(42, 78%, 60%)',
      600: 'hsl(42, 63%, 48%)',
      700: 'hsl(43, 72%, 37%)',
      800: 'hsl(43, 77%, 27%)',
      900: 'hsl(43, 86%, 17%)'
    },
    error: {
      50: 'hsl(360, 100%, 97%)',
      100: 'hsl(360, 82%, 89%)',
      200: 'hsl(360, 77%, 78%)',
      300: 'hsl(360, 71%, 66%)',
      400: 'hsl(360, 64%, 55%)',
      500: 'hsl(360, 67%, 44%)',
      600: 'hsl(360, 72%, 38%)',
      700: 'hsl(360, 79%, 32%)',
      800: 'hsl(360, 85%, 25%)',
      900: 'hsl(360, 92%, 20%)'
    },
    action: {},
    background: {
      default: '',
      paper: ''
    }
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: '700',
      textAlign: 'center'
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: '1.2rem'
    },
    body2: {},
    caption: {},
    button: {}
  }
});
export default customTheme;
