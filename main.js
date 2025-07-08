var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// main.ts
__export(exports, {
  default: () => FlowTypePlugin
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  enableAutoCapitalization: true,
  enableSmartPunctuation: true,
  enableSmartQuotes: true,
  enableNumberFormatting: true,
  enableBasicAbbreviations: true
};
var FlowTypePlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "auto-capitalization",
      name: "Auto Capitalization",
      editorCallback: (editor, view) => {
        this.applyAutoCapitalization(editor);
      }
    });
    this.addCommand({
      id: "smart-punctuation",
      name: "Smart Punctuation",
      editorCallback: (editor, view) => {
        this.applySmartPunctuation(editor);
      }
    });
    this.addCommand({
      id: "smart-quotes",
      name: "Smart Quotes",
      editorCallback: (editor, view) => {
        this.applySmartQuotes(editor);
      }
    });
    this.addCommand({
      id: "number-formatting",
      name: "Number Formatting",
      editorCallback: (editor, view) => {
        this.applyNumberFormatting(editor);
      }
    });
    this.addCommand({
      id: "basic-abbreviations",
      name: "Basic Abbreviations",
      editorCallback: (editor, view) => {
        this.applyBasicAbbreviations(editor);
      }
    });
    this.addCommand({
      id: "spacing",
      name: "Spacing",
      editorCallback: (editor, view) => {
        this.applySpacing(editor);
      }
    });
    this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, view) => {
      if (editor.getSelection()) {
        menu.addSeparator();
        menu.addItem((item) => {
          item.setTitle("Auto Capitalization").setIcon("wand").onClick(() => {
            this.applyAutoCapitalization(editor);
          });
        });
        menu.addItem((item) => {
          item.setTitle("Smart Punctuation").setIcon("wand").onClick(() => {
            this.applySmartPunctuation(editor);
          });
        });
        menu.addItem((item) => {
          item.setTitle("Smart Quotes").setIcon("wand").onClick(() => {
            this.applySmartQuotes(editor);
          });
        });
        menu.addItem((item) => {
          item.setTitle("Number Formatting").setIcon("wand").onClick(() => {
            this.applyNumberFormatting(editor);
          });
        });
        menu.addItem((item) => {
          item.setTitle("Basic Abbreviations").setIcon("wand").onClick(() => {
            this.applyBasicAbbreviations(editor);
          });
        });
        menu.addItem((item) => {
          item.setTitle("Spacing").setIcon("wand").onClick(() => {
            this.applySpacing(editor);
          });
        });
      }
    }));
    this.addSettingTab(new FlowTypeSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  applyAutoCapitalization(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applyAutoCapitalizationLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applySmartPunctuation(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applySmartPunctuationLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applySmartQuotes(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applySmartQuotesLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applyNumberFormatting(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applyNumberFormattingLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applyBasicAbbreviations(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applyBasicAbbreviationsLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applySpacing(editor) {
    const selection = editor.getSelection();
    if (!selection)
      return;
    let improvedText = this.applySpacingLogic(selection);
    editor.replaceSelection(improvedText);
  }
  applyAutoCapitalizationLogic(text) {
    if (text.length > 0 && /^[a-z]/.test(text)) {
      text = text.charAt(0).toUpperCase() + text.slice(1);
    }
    text = text.replace(/([.!?])\s+([a-z])/g, (match, punct, letter, offset, str) => {
      const before = str.slice(Math.max(0, offset - 8), offset + 1);
      if (/(e\.g\.|i\.e\.|etc\.|Ph\.D\.|UK|US|USA)[.!?]?\s*$/i.test(before)) {
        return punct + " " + letter;
      }
      return punct + " " + letter.toUpperCase();
    });
    text = text.replace(/\bi\b/g, "I");
    text = text.replace(/(["""])\s*([a-z])/g, (match, quote, letter) => {
      return quote + letter.toUpperCase();
    });
    text = text.replace(/:\s+([a-z])/g, (match, letter) => {
      return ": " + letter.toUpperCase();
    });
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const holidays = ["christmas", "easter", "thanksgiving", "halloween", "valentine", "independence"];
    const properNouns = ["oxford"];
    [...days, ...months, ...holidays, ...properNouns].forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      text = text.replace(regex, word.charAt(0).toUpperCase() + word.slice(1));
    });
    return text;
  }
  applySmartPunctuationLogic(text) {
    text = text.replace(/\.\.\./g, "\u2026");
    text = text.replace(/\s*-\s*/g, " - ");
    text = text.replace(/\s*\(\s*/g, " (");
    text = text.replace(/\s*\)\s*/g, ") ");
    text = text.replace(/\s+([.,:;!?])/g, "$1");
    text = text.trim();
    return text;
  }
  applySmartQuotesLogic(text) {
    let doubleQuoteCount = 0;
    text = text.replace(/"/g, () => {
      doubleQuoteCount++;
      return doubleQuoteCount % 2 === 1 ? '"' : '"';
    });
    let singleQuoteCount = 0;
    text = text.replace(/'/g, (match, offset, str) => {
      if (offset > 0 && /\w/.test(str[offset - 1]) && offset < str.length - 1 && /\w/.test(str[offset + 1])) {
        return "'";
      }
      if (offset > 0 && /\w/.test(str[offset - 1]) && (offset === str.length - 1 || /\s/.test(str[offset + 1]))) {
        return "'";
      }
      singleQuoteCount++;
      return singleQuoteCount % 2 === 1 ? "'" : "'";
    });
    return text;
  }
  applyNumberFormattingLogic(text) {
    text = text.replace(/\b(\d{4,})\b/g, (match) => {
      return match.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    text = text.replace(/(\d+)(st|nd|rd|th)\b/gi, (match, num, suffix) => {
      const n = parseInt(num);
      const lastDigit = n % 10;
      const lastTwoDigits = n % 100;
      let correctSuffix;
      if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        correctSuffix = "th";
      } else if (lastDigit === 1) {
        correctSuffix = "st";
      } else if (lastDigit === 2) {
        correctSuffix = "nd";
      } else if (lastDigit === 3) {
        correctSuffix = "rd";
      } else {
        correctSuffix = "th";
      }
      return n + correctSuffix;
    });
    text = text.replace(/(\d+)%/g, "$1 %");
    text = text.replace(/\$(\d+(?:\.\d{2})?)/g, (match, amount) => {
      const num = parseFloat(amount);
      return "$" + num.toFixed(2);
    });
    return text;
  }
  applyBasicAbbreviationsLogic(text) {
    text = text.replace(/\bu\. ?k\./gi, "UK");
    text = text.replace(/\bph\. ?d\./gi, "Ph.D.");
    text = text.replace(/\bU\. S\. A\./g, "USA");
    text = text.replace(/\bu\. s\. a\./g, "USA");
    text = text.replace(/\bU\.S\.A\./g, "USA");
    text = text.replace(/\bu\.s\.a\./g, "USA");
    text = text.replace(/\bU\.\s*S\.\s*A\./g, "USA");
    text = text.replace(/\bu\.\s*s\.\s*a\./g, "USA");
    text = text.replace(/\bU\.\s*K\./g, "UK");
    text = text.replace(/\bU\.\s*S\./g, "US");
    text = text.replace(/\betc\s*\./gi, "etc.");
    text = text.replace(/\bi\.\s*e\.\s*/gi, "i.e. ");
    text = text.replace(/\be\.\s*g\.\s*/gi, "e.g. ");
    text = text.replace(/\bvs\s*\./gi, "vs. ");
    text = text.replace(/\bUSA\.(?=\s|$)/g, "USA");
    text = text.replace(/(^|[.!?]\s+)the\s+(UK|USA|US)\b/g, (m, before, abbr) => before + "The " + abbr);
    text = text.replace(/\bthe\s+(UK|USA|US)\b/g, (m, abbr) => "the " + abbr);
    text = text.replace(/(i\.e\.|e\.g\.|etc\.|Ph\.D\.|UK|US|USA)\s+([A-Z])([a-z]*)/g, (match, abbr, firstLetter, rest) => {
      return abbr + " " + firstLetter.toLowerCase() + rest;
    });
    return text;
  }
  applySpacingLogic(text) {
    text = text.replace(/(["""''])(?!\s)([A-Z])/gu, "$1 $2");
    text = text.replace(/([.!?]["""''])(?!\s)([A-Za-z])/gu, "$1 $2");
    text = text.replace(/,(?!\s)(["""''])/gu, ", $1");
    text = text.replace(/(?<!\b(?:Ph|Dr|Mr|Ms|Mrs|Prof|e|i|etc|vs))\.(?!\s)([A-Za-z])/g, ". $1");
    text = text.replace(/([!?])(?!\s)([A-Za-z])/g, "$1 $2");
    text = text.replace(/([,:;])(?!\s)([A-Za-z])/g, "$1 $2");
    text = text.replace(/\s+/g, " ");
    text = text.trim();
    return text;
  }
};
var FlowTypeSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "FlowType Settings" });
    new import_obsidian.Setting(containerEl).setName("Auto Capitalization").setDesc("Enable automatic capitalization features").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableAutoCapitalization).onChange(async (value) => {
      this.plugin.settings.enableAutoCapitalization = value;
      await this.plugin.saveSettings();
    }));
    const autoCapExample = containerEl.createEl("div", { cls: "setting-item-description" });
    autoCapExample.createEl("strong", { text: "Example:" });
    autoCapExample.createEl("br");
    autoCapExample.createEl("span", { text: "Input: ", cls: "flowtype-example-label" });
    autoCapExample.createEl("code", { text: "hello world. how are you? i am fine." });
    autoCapExample.createEl("br");
    autoCapExample.createEl("span", { text: "Output: ", cls: "flowtype-example-label" });
    autoCapExample.createEl("code", { text: "Hello world. How are you? I am fine." });
    new import_obsidian.Setting(containerEl).setName("Smart Punctuation").setDesc("Enable intelligent punctuation features").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableSmartPunctuation).onChange(async (value) => {
      this.plugin.settings.enableSmartPunctuation = value;
      await this.plugin.saveSettings();
    }));
    const smartPuncExample = containerEl.createEl("div", { cls: "setting-item-description" });
    smartPuncExample.createEl("strong", { text: "Example:" });
    smartPuncExample.createEl("br");
    smartPuncExample.createEl("span", { text: "Input: ", cls: "flowtype-example-label" });
    smartPuncExample.createEl("code", { text: "Hello there!How are you?Fine,thanks." });
    smartPuncExample.createEl("br");
    smartPuncExample.createEl("span", { text: "Output: ", cls: "flowtype-example-label" });
    smartPuncExample.createEl("code", { text: "Hello there! How are you? Fine, thanks." });
    new import_obsidian.Setting(containerEl).setName("Smart Quotes").setDesc("Enable quote and apostrophe corrections").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableSmartQuotes).onChange(async (value) => {
      this.plugin.settings.enableSmartQuotes = value;
      await this.plugin.saveSettings();
    }));
    const smartQuotesExample = containerEl.createEl("div", { cls: "setting-item-description" });
    smartQuotesExample.createEl("strong", { text: "Example:" });
    smartQuotesExample.createEl("br");
    smartQuotesExample.createEl("span", { text: "Input: ", cls: "flowtype-example-label" });
    smartQuotesExample.createEl("code", { text: 'He said, "hello". It is John book.' });
    smartQuotesExample.createEl("br");
    smartQuotesExample.createEl("span", { text: "Output: ", cls: "flowtype-example-label" });
    smartQuotesExample.createEl("code", { text: 'He said, "hello". Quotes become curvy.' });
    new import_obsidian.Setting(containerEl).setName("Number Formatting").setDesc("Enable number formatting features").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableNumberFormatting).onChange(async (value) => {
      this.plugin.settings.enableNumberFormatting = value;
      await this.plugin.saveSettings();
    }));
    const numberExample = containerEl.createEl("div", { cls: "setting-item-description" });
    numberExample.createEl("strong", { text: "Example:" });
    numberExample.createEl("br");
    numberExample.createEl("span", { text: "Input: ", cls: "flowtype-example-label" });
    numberExample.createEl("code", { text: "I have 1000 dollars. Price is $5." });
    numberExample.createEl("br");
    numberExample.createEl("span", { text: "Output: ", cls: "flowtype-example-label" });
    numberExample.createEl("code", { text: "I have 1,000 dollars. Price is $5.00." });
    new import_obsidian.Setting(containerEl).setName("Basic Abbreviations").setDesc("Enable basic abbreviation corrections").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableBasicAbbreviations).onChange(async (value) => {
      this.plugin.settings.enableBasicAbbreviations = value;
      await this.plugin.saveSettings();
    }));
    const abbrevExample = containerEl.createEl("div", { cls: "setting-item-description" });
    abbrevExample.createEl("strong", { text: "Example:" });
    abbrevExample.createEl("br");
    abbrevExample.createEl("span", { text: "Input: ", cls: "flowtype-example-label" });
    abbrevExample.createEl("code", { text: "the u. s. a. is big. dr smith. i.e. Means." });
    abbrevExample.createEl("br");
    abbrevExample.createEl("span", { text: "Output: ", cls: "flowtype-example-label" });
    abbrevExample.createEl("code", { text: "The USA is big. Dr Smith. i.e. means." });
    new import_obsidian.Setting(containerEl).setName("Spacing").setDesc("Dedicated spacing corrections for dialogue, punctuation, and quotes. Use this if you want to fix only spacing issues, without affecting punctuation or capitalization.");
    const spacingExample = containerEl.createEl("div", { cls: "setting-item-description" });
    spacingExample.createEl("strong", { text: "Example:" });
    spacingExample.createEl("br");
    spacingExample.createEl("span", { text: "Before: ", cls: "flowtype-example-label" });
    spacingExample.createEl("code", { text: `On Monday, Dr Brown said: "Good morning! How are you today?"Mr Smith replied,"I'm fine, thanks. Prof Jones will arrive at 1,500 dollars per session. He's from The UK and has a Ph.D. in linguistics. e.g. he studied at Oxford. i.e. he's an expert."` });
    spacingExample.createEl("br");
    spacingExample.createEl("span", { text: "After: ", cls: "flowtype-example-label" });
    spacingExample.createEl("code", { text: `On Monday, Dr Brown said: "Good morning! How are you today?" Mr Smith replied, "I'm fine, thanks. Prof Jones will arrive at 1,500 dollars per session. He's from The UK and has a Ph.D. in linguistics. e.g. he studied at Oxford. i.e. he's an expert."` });
    const usageDiv = containerEl.createEl("div", { cls: "setting-item" });
    usageDiv.createEl("h3", { text: "How to Use" });
    const usageDesc = usageDiv.createEl("div", { cls: "setting-item-description" });
    usageDesc.createEl("p", { text: "1. Select text in your note" });
    usageDesc.createEl("p", { text: "2. Right-click and choose a FlowType option from the context menu" });
    usageDesc.createEl("p", { text: '3. Or use Command Palette (Ctrl/Cmd + P) and search for "FlowType"' });
    usageDesc.createEl("p", { text: "4. Recommended order: Spacing \u2192 Smart Punctuation \u2192 Basic Abbreviations \u2192 Number Formatting \u2192 Smart Quotes" });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
