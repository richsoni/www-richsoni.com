export default {
  /** name to display in the top left corner */
  name: 'RichSoni.com Storybook',

  /** URL for name in top left corner to link to */
  url: '#',
  /** show story component as full screen */
  goFullScreen: false,

  /** display panel that shows a list of stories */
  showStoriesPanel: true,

  /** display panel that shows addon configurations */
  showAddonPanel: true,

  /** display floating search box to search through stories */
  showSearchBox: false,

  /** show addon panel as a vertical panel on the right */
  addonPanelInRight: true,

  /** sorts stories */
  sortStoriesByKind: true,

  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.` */
  hierarchySeparator: /\//,

  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|` */
  hierarchyRootSeparator: null,

  /** sidebar tree animations */
  sidebarAnimations: true,

  /** id to select an addon panel */
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook

  /** enable/disable shortcuts */
  enableShortcuts: true, // true by default
}
