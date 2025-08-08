/**
 * AXS Language Extension - Main Entry Point
 * 
 * This is the main file that VSCode loads when the extension starts.
 * It sets up autocompletion for AXS files.
 * 
 * The extension is very simple:
 * 1. When VSCode starts, it calls the activate() function
 * 2. We register a completion provider that shows suggestions when you type
 * 3. The suggestions come from the files: axs-functions.ts and form-functions.ts
 */

import * as vscode from 'vscode';
import { provideCompletions } from './completions';

/**
 * This function is called when VSCode activates the extension
 * (when you open an .axs file or start VSCode with the extension installed)
 */
export function activate(context: vscode.ExtensionContext) {
    
    // Tell VSCode we want to provide autocompletion for .axs files
    const axsDocumentSelector: vscode.DocumentSelector = { 
        scheme: 'file', 
        language: 'axs' 
    };

    // Set up basic language features for AXS files (like JavaScript)
    vscode.languages.setLanguageConfiguration('axs', {
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/']
        },
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
            { open: '`', close: '`' }
        ],
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
    });

    // Register our completion provider (the thing that shows suggestions when you type)
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        axsDocumentSelector,
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                // Call our completion function from completions.ts
                return provideCompletions(document, position);
            }
        },
        '.' // Trigger completion when user types a dot
    );

    // Tell VSCode to clean up our completion provider when the extension is disabled
    context.subscriptions.push(completionProvider);
}

/**
 * This function is called when the extension is deactivated (VSCode closes, extension disabled, etc.)
 * We don't need to do anything special here.
 */
export function deactivate() {
    // Nothing to clean up
}