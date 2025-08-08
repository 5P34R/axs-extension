/**
 * AXS Completion Provider
 * 
 * This file handles showing autocompletion suggestions when you type.
 * It's organized by what you're typing after (ax., form., menu., etc.)
 */

import * as vscode from 'vscode';
import { AXS_FUNCTIONS } from './axs-functions';
import { FORM_FUNCTIONS, AXCOMMAND_FUNCTIONS, MENU_FUNCTIONS } from './form-functions';

/**
 * Helper function to create a completion item from our simple function format
 */
function createCompletionItem(func: any): vscode.CompletionItem {
    const item = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Method);
    item.detail = func.signature;
    item.documentation = func.description;
    
    // If the example has ${} placeholders, make it a snippet, otherwise just text
    if (func.example.includes('${')) {
        item.insertText = new vscode.SnippetString(func.example);
    } else {
        item.insertText = func.example;
    }
    
    return item;
}

/**
 * Main completion provider - this is what VSCode calls when you type
 */
export function provideCompletions(
    document: vscode.TextDocument, 
    position: vscode.Position
): vscode.CompletionItem[] {
    
    const completions: vscode.CompletionItem[] = [];
    
    // Get what the user typed before the cursor
    const linePrefix = document.lineAt(position).text.slice(0, position.character);
    
    // Show ax functions when typing "ax."
    if (linePrefix.endsWith('ax.')) {
        // Add all ax functions from all categories
        Object.values(AXS_FUNCTIONS).forEach(category => {
            category.forEach(func => {
                completions.push(createCompletionItem(func));
            });
        });
    }
    
    // Show form functions when typing "form."
    else if (linePrefix.endsWith('form.')) {
        FORM_FUNCTIONS.forEach(func => {
            completions.push(createCompletionItem(func));
        });
    }
    
    // Show menu functions when typing "menu."  
    else if (linePrefix.endsWith('menu.')) {
        MENU_FUNCTIONS.forEach(func => {
            completions.push(createCompletionItem(func));
        });
    }
    
    // Show AxCommand functions when typing on command objects (like "cmd." or "_cmd_something.")
    else if (linePrefix.match(/\w+\.(addArg|setPreHook|addSub)/) || linePrefix.match(/_cmd\w*\./)) {
        AXCOMMAND_FUNCTIONS.forEach(func => {
            completions.push(createCompletionItem(func));
        });
    }
    
    // Show the main objects (ax, form, menu) when not typing after a dot
    else if (!linePrefix.includes('.')) {
        // Add the main AXS objects
        const axCompletion = new vscode.CompletionItem('ax', vscode.CompletionItemKind.Variable);
        axCompletion.detail = 'AxScript built-in object';
        axCompletion.documentation = 'Built-in AXScript object containing all AdaptixC2 scripting functions';
        completions.push(axCompletion);

        const formCompletion = new vscode.CompletionItem('form', vscode.CompletionItemKind.Variable);
        formCompletion.detail = 'AxScript form object'; 
        formCompletion.documentation = 'Built-in form object for creating UI dialogs and widgets';
        completions.push(formCompletion);

        const menuCompletion = new vscode.CompletionItem('menu', vscode.CompletionItemKind.Variable);
        menuCompletion.detail = 'AxScript menu object';
        menuCompletion.documentation = 'Built-in menu object for creating context menu actions';
        completions.push(menuCompletion);
    }
    
    return completions;
}