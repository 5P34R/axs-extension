"use strict";
/**
 * AXS Functions Configuration
 *
 * This file contains all the ax object functions that show up in autocompletion.
 * To add a new function, simply add it to the appropriate category below.
 *
 * Each function needs:
 * - name: The function name (what you type)
 * - signature: The parameters and return type
 * - description: What the function does
 * - example: How to use it (the ${1:} parts are placeholders you can tab through)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AXS_FUNCTIONS = void 0;
exports.AXS_FUNCTIONS = {
    // Functions for managing agents (beacons/gophers)
    "Agent Management": [
        {
            name: "agents",
            signature: "() → AGENT[id]",
            description: "Get information about all agents calling back to the Adaptix teamserver",
            example: "agents()"
        },
        {
            name: "agent_info",
            signature: "(string id, string property) → any",
            description: "Get information from an agent session's metadata",
            example: 'agent_info("${1:id}", "${2:property}")'
        },
        {
            name: "agent_set_color",
            signature: "(string[] ids, string background, string foreground, bool reset) → void",
            description: "Set color for agent's item in Session Table",
            example: 'agent_set_color([${1:"id"}], "${2:background}", "${3:foreground}", ${4:false})'
        },
        {
            name: "arch",
            signature: "(string id) → string",
            description: "Get agent architecture information (x86 or x64)",
            example: 'arch("${1:id}")'
        },
        {
            name: "is64",
            signature: "(string id) → bool",
            description: "Check if agent session is running on 64-bit system",
            example: 'is64("${1:id}")'
        },
        {
            name: "isadmin",
            signature: "(string id) → bool",
            description: "Check if agent session has administrative rights",
            example: 'isadmin("${1:id}")'
        },
        {
            name: "agent_set_impersonation",
            signature: "(string id, string impersonate, bool elevated) -> void",
            description: "Set impersonate for agent's item in Session Table",
            example: 'agent_set_impersonation("${1:id}", "${2:impersonate}", ${3:true})'
        },
        {
            name: "agent_set_mark",
            signature: "(string id, string mark) -> void",
            description: "Set mark for agent's item in Session Table",
            example: 'agent_set_mark("${1:id}", "${2:Inactive}")'
        },
        {
            name: "agent_set_tag",
            signature: "(string id, string tag) -> void",
            description: "Set tag for agent's item in Session Table",
            example: 'agent_set_tag("${1:id}", "${2:tag}")'
        }
    ],
    // Functions for file operations
    "File Operations": [
        {
            name: "file_read",
            signature: "(string path) → string",
            description: "Read file contents and return as base64",
            example: 'file_read("${1:path}")'
        },
        {
            name: "file_exists",
            signature: "(string path) → bool",
            description: "Check if specified file exists",
            example: 'file_exists("${1:path}")'
        },
        {
            name: "file_basename",
            signature: "(string path) → string",
            description: "Extract filename from full path",
            example: 'file_basename("${1:path}")'
        }
    ],
    // Functions for logging and messages
    "Logging": [
        {
            name: "log",
            signature: "(string text) → void",
            description: "Print text to AxScript Console",
            example: 'log("${1:message}")'
        },
        {
            name: "log_error",
            signature: "(string text) → void",
            description: "Print error text to AxScript Console",
            example: 'log_error("${1:error}")'
        },
        {
            name: "show_message",
            signature: "(string title, string text) → void",
            description: "Display message dialog",
            example: 'show_message("${1:title}", "${2:message}")'
        }
    ],
    // Functions for creating commands and BOFs
    "Commands": [
        {
            name: "create_command",
            signature: "(string name, string description, string example?) → AxCommand",
            description: "Create an AxCommand object for custom console commands",
            example: 'create_command("${1:name}", "${2:description}", "${3:example}")'
        },
        {
            name: "execute_command",
            signature: "(string id, string command) → void",
            description: "Execute a command and save to agent console",
            example: 'execute_command("${1:id}", "${2:command}")'
        },
        {
            name: "execute_alias",
            signature: "(string id, string cmdline, string new_cmd, string task_description) → void",
            description: "Execute a command with custom console display",
            example: 'execute_alias("${1:id}", "${2:cmdline}", "${3:new_cmd}", "${4:description}")'
        },
        {
            name: "bof_pack",
            signature: "(string types, any[] args) → string",
            description: "Pack arguments for BOF (Beacon Object File) APIs",
            example: 'bof_pack("${1:types}", [${2:args}])'
        }
    ],
    // System information functions
    "System Info": [
        {
            name: "ticks",
            signature: "() → int",
            description: "Get current UNIX Epoch Time value as integer",
            example: "ticks()"
        },
        {
            name: "format_time",
            signature: "(string format, int unixtime) → string",
            description: "Format UNIX timestamp to readable string",
            example: 'format_time("${1:dd/MM/yyyy hh:mm:ss}", ${2:unixtime})'
        },
        {
            name: "script_dir",
            signature: "() → string",
            description: "Get current script directory",
            example: "script_dir()"
        }
    ],
    // System & Network Functions
    "System & Network": [
        {
            name: "interfaces",
            signature: "() → string[]",
            description: "Get list of network interfaces on the teamserver",
            example: "interfaces()"
        }
    ],
    // Console Functions
    "Console": [
        {
            name: "console_message",
            signature: "(string id, string message, string type?, string text?) → void",
            description: "Print message to agent console",
            example: 'console_message("${1:id}", "${2:message}", "${3:}", "${4:}")'
        }
    ],
    // Credential Management Functions
    "Credential Management": [
        {
            name: "credentials",
            signature: "() → CRED[id]",
            description: "Get all stored credentials",
            example: "credentials()"
        },
        {
            name: "credentials_add",
            signature: "(string username, string password, string realm?, string type?, string tag?, string storage?, string host?) → void",
            description: "Add credentials to Credentials Manager",
            example: 'credentials_add("${1:username}", "${2:password}", "${3:realm}", "${4:password}", "${5:tag}", "${6:manual}", "${7:host}")'
        }
    ],
    // Command & Script Functions
    "Command & Script": [
        {
            name: "create_commands_group",
            signature: "(string name, AxCommand[] commands) → AxCommandsGroup",
            description: "Create a group of AxCommand objects",
            example: 'create_commands_group("${1:name}", [${2:commands}])'
        },
        {
            name: "register_commands_group",
            signature: "(AxCommandsGroup group, string[] agents, string[] os, string[] listeners) → void",
            description: "Register a command group with specific agents/OS/listeners",
            example: 'register_commands_group(${1:group}, [${2:"beacon"}], [${3:"windows"}], [${4:}])'
        },
        {
            name: "execute_browser",
            signature: "(string id, string command) → void",
            description: "Execute a command without saving to console",
            example: 'execute_browser("${1:id}", "${2:command}")'
        },
        {
            name: "script_import",
            signature: "(string path) → string",
            description: "Import another AxScript into current script's environment",
            example: 'script_import("${1:path}")'
        },
        {
            name: "script_load",
            signature: "(string path) → string",
            description: "Load new script to AxScript Manager",
            example: 'script_load("${1:path}")'
        },
        {
            name: "script_unload",
            signature: "(string path) → string",
            description: "Unload script from AxScript Manager",
            example: 'script_unload("${1:path}")'
        }
    ],
    // Browser & Terminal Functions
    "Browser & Terminal": [
        {
            name: "open_agent_console",
            signature: "(string id) → void",
            description: "Open agent console",
            example: 'open_agent_console("${1:id}")'
        },
        {
            name: "open_remote_terminal",
            signature: "(string id) → void",
            description: "Open Interactive Terminal for specific agent",
            example: 'open_remote_terminal("${1:id}")'
        },
        {
            name: "open_browser_process",
            signature: "(string id) → void",
            description: "Open process browser for an agent",
            example: 'open_browser_process("${1:id}")'
        },
        {
            name: "open_browser_files",
            signature: "(string id) → void",
            description: "Open file browser for an agent",
            example: 'open_browser_files("${1:id}")'
        }
    ]
    // TO ADD MORE FUNCTIONS:
    // 1. Pick the right category above (or create a new one)
    // 2. Copy the format of existing functions
    // 3. Fill in: name, signature, description, example
    // 4. Save the file and recompile the extension
};
//# sourceMappingURL=axs-functions.js.map