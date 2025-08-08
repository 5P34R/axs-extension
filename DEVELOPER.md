# AXS Extension - Developer Guide

This guide explains how to modify and extend the AXS VSCode extension. **You don't need to be a programmer to add new functions!**

## 📁 File Structure (Simple!)

```
src/
├── extension-new.ts      # Main extension file (don't touch this)
├── completions.ts        # How autocompletion works (don't touch this)
├── axs-functions.ts      # ADD NEW AX FUNCTIONS HERE ⭐
├── form-functions.ts     # ADD NEW FORM/MENU FUNCTIONS HERE ⭐
```

## ✨ How to Add New AX Functions

1. **Open `src/axs-functions.ts`**
2. **Find the right category** (Agent Management, File Operations, etc.)
3. **Copy an existing function and modify it:**

```typescript
{
    name: "your_new_function",                    // What you type
    signature: "(string param) → string",        // Parameters and return type  
    description: "What this function does",      // Help text shown to user
    example: 'your_new_function("${1:param}")'   // Example with placeholders
}
```

4. **Save the file and recompile:** `npm run compile`

### Example: Adding a New Function

Let's say AXS adds a new function `ax.get_hostname(id)`. Add this to the "System Info" category:

```typescript
{
    name: "get_hostname",
    signature: "(string id) → string", 
    description: "Get the hostname of an agent",
    example: 'get_hostname("${1:id}")'
}
```

## 🎨 How to Add Form Functions

1. **Open `src/form-functions.ts`**
2. **Add to the `FORM_FUNCTIONS` array:**

```typescript
{
    name: "create_slider", 
    signature: "(int min, int max) → FormSlider",
    description: "Create a slider widget",
    example: 'create_slider(${1:0}, ${2:100})'
}
```

## 📝 Placeholder Guide

In the `example` field, use `${1:}`, `${2:}`, etc. for tab-through placeholders:
- `${1:id}` - First placeholder, default value "id"
- `${2:command}` - Second placeholder, default value "command"  
- `${3:}` - Third placeholder, no default value

## 🚀 Testing Your Changes

1. **Compile:** `npm run compile`
2. **Test:** Press `F5` in VSCode to launch Extension Development Host
3. **Try it:** Open an `.axs` file and type `ax.` to see your new functions

## 📂 Categories in axs-functions.ts

- **Agent Management** - Functions for managing beacons/gophers
- **File Operations** - Reading, checking files  
- **Logging** - Console output and messages
- **Commands** - Creating and executing commands
- **System Info** - Time, directories, system information

Add new categories by copying the format of existing ones.

## ❓ Need Help?

- Look at existing functions for examples
- The `completions.ts` file handles showing the suggestions (you shouldn't need to touch it)
- The `extension-new.ts` file is the main entry point (you shouldn't need to touch it)

## 🔄 Making it Live

After testing:
1. Replace `src/extension.ts` with `src/extension-new.ts` 
2. Update imports if needed
3. Compile and test again
4. Commit to GitHub

That's it! The extension is designed to be simple to extend without programming knowledge.