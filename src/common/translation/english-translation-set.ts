import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const englishTranslationSet: TranslationSet = {
    trayIconShow: "Show",
    trayIconSettings: "Settings",
    trayIconQuit: "Quit",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "No search results found",

    ueliCommandClearCaches: "Clear caches",
    ueliCommandClearCachesDescription: "Clears all caches of all plugins",
    ueliCommandEditSettingsFile: "Edit settings file",
    ueliCommandEditSettingsFileDescription: "Edit the settings file with your default text editor",
    ueliCommandExit: "Quit",
    ueliCommandExitDescription: "Quit ueli app",
    ueliCommandOpenSettings: "Settings",
    ueliCommandOpenSettingsDescription: "Change settings",
    ueliCommandRefreshIndexes: "Refresh indexes",
    ueliCommandRefreshIndexesDescription: "Refreshes all indexes of all plugins",
    ueliCommandReload: "Reload",
    ueliCommandReloadDescription: "Reload ueli",

    generalErrorTitle: "An error occured",
    generalErrorDescription: "Check log for more details",

    successfullyRefreshedIndexes: "Successfully refreshed indexes",
    successfullyClearedCaches: "Successfully cleared caches",
    successfullyUpdatedconfig: "Successfully updated config",
    successfullyClearedCachesBeforeExit: "Successfully cleared caches before exit",

    // settings
    generalSettings: "General",
    generalSettingsLanguage: "Language",
    generalSettingsAutostartApp: "Autostart app on system startup",
    generalSettingsShowTrayIcon: "Show tray icon",
    generalSettingsClearCachesOnExit: "Clear caches on quit",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanInterval: "Rescan interval (in seconds)",

    appearanceSettings: "Appearance",
    appearanceSettingsWindowWidth: "Window width (in pixels)",
    appearanceSettingsMaxSearchResultsPerPage: "Max search results per page",
    appearanceSettingsSearchResultHeight: "Search result height (in pixels)",
    appearanceSettingsSmoothScrolling: "Smooth scrolling",
    appearanceSettingsUserInputHeight: "User input height (in pixels)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Show description on all search results",

    colorThemeSettings: "Color Theme",
    colorthemeUserInputBackgroundColor: "User input background color",
    colorThemeUserInputTextColor: "User input text color",
    colorThemeSearchResultsBackgroundColor: "Search results background color",
    colorThemeSearchResultsItemActiveBackgroundColor: "Search results active background color",
    colorThemeSearchResultsItemActiveTextColor: "Search results active text color",
    colorThemeSearchResutlsItemNameTextColor: "Search results name text color",
    colorThemeSearchResultsItemDescriptionTextColor: "Search results description text color",
    colorThemeScrollbarForegroundColor: "Scrollbar foreground color",
    colorThemeScrollbarBackgroundColor: "Scrollbar background color",

    applicationSearchSettings: "Application Search",
    applicationSearchSettingsApplicationFolders: "Application folders",
    applicationSearchSettingsApplicationFolder: "Application folder",
    applicationSearchSettingsFolderPath: "Folder path",
    applicationSearchSettingsRemoveAction: "Remove",
    applicationSearchSettingsAddApplicationFolder: "Add application folder",
    applicationSearchSettingsApplicationFileExtensions: "Application file extensions",
    applicationSearchSettingsApplicationFileExtension: "File extension",
    applicationSearchSettingsAddApplicationFileExtension: "Add file extension",
    applicationSearchSettingsDisabled: "Application search is disabled",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" is not a valid file extension`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} is not a folder"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} does not exist"`,
    applicationSearchSettingsFolderValidationError: `An error occured while trying to validate "{{value}}"`,

    searchEngineSettings: "Search engine",
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsStrict: "Strict",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsMaxSearchResults: "Max search results",

    shortcutSettings: "Shorcuts",
    shortcutSettingsShortcut: "Shortcuts",
    shortcutSettingsTableType: "Type",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Execution argument",
    shortcutSettingsTableDescription: "Description",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Edit",
    shortcutSettingsTableDelete: "Delete",
    shortcutSettingsAddShortcut: "Add shortcut",
    shortcutSettingsDisabled: "Shortcuts are disabled",
    shortcutSettingsEditModalImageUrl: "Image URL",
    shortcutSettingsEditModalSvgString: "SVG string",
    shortcutSettingsEditModalGoogleWebsite: "Google website",
    shortcutSettingsEditModalDownloadsFolder: "Downloads folder",
    shortcutSettingsEditModalFilePath: "File path",
    shortcutSettingsInvalidShortcutErrorMessage: "Invalid shortcut",
    shortcutSettingsTagPlaceholder: "Add a tag and press enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeFilePath: "File path",

    translationSettingsTranslation: "Translation",
    translationSettingsDebounceDelay: "Debounce delay (in milliseconds)",
    translationSettingsMinSearchTermLength: "Min search term length",
    translationSettingsPrefix: "Prefix",
    translationSettingsSourceLanguage: "Source language",
    translationSettingsTargetLanguage: "Target language",
    translationSettingsDisabled: "Translation is disabled",

    everythingSearch: "Everything search",
    everythingSearchPathToBinary: `Path to "es.exe"`,
    everythingSearchPrefix: "Prefix",
    everythingSearchMaxSearchResults: "Max search results",
    everythingSearchDisabled: "Everything search is disabled",
    everythingSearchPathToBinaryFilterName: "Executable files",

    mdfindSearch: "mdfind search",
    mdfindSearchDebounceDelay: "Debounce delay (in milliseconds)",
    mdfindSearchPrefix: "Prefix",
    mdfindSearchMaxSearchResults: "Max search results",
    mdfindSearchDisabled: "mdfind search is disabled",

    websearch: "Web search",
    websearchEngines: "Web search engines",
    websearchEditingModalTitleAdd: "Add web search engine",
    websearchEditingModalTitleEdit: "Edit web search engine",
    websearchName: "Name",
    websearchPrefix: "Prefix",
    websearchUrl: "URL",
    websearchIcon: "Icon",
    websearchPriority: "Priority",
    websearchIsFallback: "Fallback",
    websearchEncodeSearchTerm: "Encode search term",
    websearchInvalidWebsearchEngine: "Invalid web search engine",
    websearchDisabled: "Web search is disabled",

    cancel: "Cancel",
    save: "Save",
    add: "Add",
    remove: "Remove",
    edit: "Edit",
    forExample: "For example",
    iconType: "Icon type",
};
