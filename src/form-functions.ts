/**
 * Form Functions Configuration
 * 
 * This file contains all the form object functions for creating UI dialogs.
 * To add a new form function, simply add it to the list below.
 */

export const FORM_FUNCTIONS = [
    // Creating UI elements
    {
        name: "create_label",
        signature: "(string text) → FormLabel", 
        description: "Create a text label widget",
        example: 'create_label("${1:Label text}")'
    },
    {
        name: "create_textline",
        signature: "(string text?) → FormTextLine",
        description: "Create a single-line text input widget", 
        example: 'create_textline("${1:}")'
    },
    {
        name: "create_button",
        signature: "(string text) → FormButton",
        description: "Create a button widget",
        example: 'create_button("${1:Button}")'
    },
    {
        name: "create_combo",
        signature: "() → FormCombo", 
        description: "Create a combo box (dropdown) widget",
        example: "create_combo()"
    },
    {
        name: "create_dialog",
        signature: "(string title) → FormDialog",
        description: "Create a dialog window",
        example: 'create_dialog("${1:Dialog Title}")'
    },
    
    // Layout functions
    {
        name: "create_gridlayout",
        signature: "() → FormGridLayout",
        description: "Create a grid layout for organizing widgets", 
        example: "create_gridlayout()"
    },
    
    // Event handling
    {
        name: "connect",
        signature: "(FormWidget widget, string signal, function callback) → void",
        description: "Connect widget signal to callback function",
        example: 'connect(${1:widget}, "${2:clicked}", function(${3:}) {\n\t${4:// Event handler}\n})'
    },

    // Dialog & UI Functions
    {
        name: "prompt_open_file",
        signature: "(string caption?, string filter?) → string",
        description: "Show file open dialog",
        example: 'prompt_open_file("${1:Select file}", "${2:}")'
    },
    {
        name: "prompt_open_dir",
        signature: "(string caption?) → string",
        description: "Show directory selection dialog",
        example: 'prompt_open_dir("${1:Select directory}")'
    },
    {
        name: "prompt_save_file",
        signature: "(string filename, string caption?, string filter?) → string",
        description: "Show file save dialog",
        example: 'prompt_save_file("${1:filename}", "${2:Save file}", "${3:}")'
    },
    {
        name: "copy_to_clipboard",
        signature: "(string text) → void",
        description: "Copy text to client's clipboard",
        example: 'copy_to_clipboard("${1:text}")'
    }

    // TO ADD MORE FORM FUNCTIONS:
    // Just copy the format above and add your new function
];

export const AXCOMMAND_FUNCTIONS = [
    // Functions you can call on AxCommand objects (like cmd.addArgString)
    {
        name: "addArgString",
        signature: "(string name, bool required, string defaultValue?) → void",
        description: "Add a string argument to the AxCommand",
        example: 'addArgString("${1:name}", ${2:true}, "${3:}")'
    },
    {
        name: "addArgInt", 
        signature: "(string name, bool required, int defaultValue?) → void",
        description: "Add an integer argument to the AxCommand",
        example: 'addArgInt("${1:name}", ${2:true}, ${3:0})'
    },
    {
        name: "addArgFile",
        signature: "(string name, bool required) → void",
        description: "Add a file argument to the AxCommand (reads file contents)",
        example: 'addArgFile("${1:name}", ${2:true})'
    },
    {
        name: "setPreHook",
        signature: "(function hook) → void", 
        description: "Set a pre-execution hook function for the AxCommand",
        example: 'setPreHook(function (id, cmdline, parsed_json, ...parsed_lines) {\n\t${1:// Command logic here}\n})'
    }
];

export const MENU_FUNCTIONS = [
    // Functions for the menu object
    {
        name: "create_action",
        signature: "(string name, function callback) → MenuAction",
        description: "Create a menu action with callback function",
        example: 'create_action("${1:Action Name}", function(agents_id) {\n\t${2:// Action logic here}\n})'
    },
    {
        name: "add_session_access",
        signature: "(MenuAction action, string[] agentTypes) → void", 
        description: "Add menu action to session context menu",
        example: 'add_session_access(${1:action}, [${2:"beacon"}])'
    },
    {
        name: "add_processbrowser",
        signature: "(MenuAction action, string[] agentTypes, string[] osTypes) → void",
        description: "Add menu action to process browser context menu", 
        example: 'add_processbrowser(${1:action}, [${2:"beacon"}], [${3:"windows"}])'
    }
];