# FlowType for Obsidian

> **Professional text enhancement plugin for English writers** ✨

![Plugin Preview](https://img.shields.io/badge/Obsidian-Plugin-purple) ![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-1.2.6-blue)

**FlowType** is a comprehensive text enhancement plugin for Obsidian that helps English writers improve their text quality through intelligent automation. From smart punctuation to professional abbreviation formatting, FlowType transforms your writing workflow.

## 🌟 Features

### ✨ Auto Capitalization
Automatically capitalizes sentences, proper nouns, and dialogue text.

**Example:**
```
Input:  hello world. how are you? i am fine.
Output: Hello world. How are you? I am fine.
```

### 🎯 Smart Punctuation
Adds proper spacing after punctuation marks and improves overall text flow.

**Example:**
```
Input:  Hello there!How are you?Fine,thanks.
Output: Hello there! How are you? Fine, thanks.
```

### 💬 Smart Quotes
Converts straight quotes to professional curly quotes and handles apostrophes correctly.

**Example:**
```
Input:  He said, "hello". It is John book.
Output: He said, "hello". Quotes become curvy.
```

### 🔢 Number Formatting
Formats numbers with proper commas, currency, and ordinal suffixes.

**Example:**
```
Input:  I have 1000 dollars. Price is $5.
Output: I have 1,000 dollars. Price is $5.00.
```

### 📝 Basic Abbreviations
Standardizes common abbreviations and professional titles.

**Example:**
```
Input:  the u. s. a. is big. dr smith. i.e. Means.
Output: The USA is big. Dr Smith. i.e. means.
```

## 🚀 Installation

### From Obsidian Community Plugins (NOT AVAILABLE YET)
1. Open Obsidian Settings
2. Go to Community Plugins
3. Turn off Safe mode
4. Click Browse and search for "FlowType"
5. Click Install, then Enable

### Manual Installation
1. Download the latest release from [GitHub Releases](https://github.com/Vlad3Design/obsidian-flowtype/releases)
2. Extract the files to your vault's `.obsidian/plugins/flowtype/` folder
3. Reload Obsidian
4. Enable the plugin in Community Plugins

## 📖 Usage

### Context Menu (Recommended)
1. Select text in your note
2. Right-click to open context menu
3. Choose a FlowType option:
   - **FlowType: Auto Capitalization**
   - **FlowType: Smart Punctuation**
   - **FlowType: Smart Quotes**
   - **FlowType: Number Formatting**
   - **FlowType: Basic Abbreviations**

### Command Palette
1. Press `Ctrl/Cmd + P` to open Command Palette
2. Search for "FlowType"
3. Select the desired function

### Recommended Workflow
For best results, apply functions in this order:
1. **Smart Punctuation** (fixes spacing)
2. **Basic Abbreviations** (standardizes abbreviations)
3. **Number Formatting** (formats numbers)
4. **Smart Quotes** (converts quotes)
5. **Auto Capitalization** (final polish)

## ⚙️ Settings

Access settings via **Settings → Community Plugins → FlowType**

### Feature Toggles
- **Auto Capitalization**: Enable automatic capitalization features
- **Smart Punctuation**: Enable intelligent punctuation features
- **Smart Quotes**: Enable quote and apostrophe corrections
- **Number Formatting**: Enable number formatting features
- **Basic Abbreviations**: Enable basic abbreviation corrections

Each setting includes detailed examples showing input and output transformations.

## 🎨 Examples

### Complete Text Transformation

**Before:**
```
"hello there"dr smith asked."its almost 3 o'clock"mr jones replied. the u. s. a. Is a country. i.e. Means id est. e.g. Means exempli gratia. I have 1000 dollars and 50000 people live here.
```

**After (all functions applied):**
```
"hello there" Dr Smith asked. "its almost 3 o'clock" Mr Jones replied. The USA is a country. i.e. means id est. e.g. means exempli gratia. I have 1,000 dollars and 50,000 people live here.
```

## 🔧 Technical Details

- **Language**: TypeScript
- **Framework**: Obsidian Plugin API
- **Build Tool**: esbuild
- **License**: MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Build the plugin: `npm run build`
4. Copy `main.js` and `manifest.json` to your test vault

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vlad 3Design**
- GitHub: [@Vlad3Design](https://github.com/Vlad3Design)
- Website: [vlad3d.art](https://vlad3d.art)
- Twitter: [@vlad3design](https://twitter.com/vlad3design)
- Instagram: [@vlad.3design](https://instagram.com/vlad.3design)

## 🙏 Acknowledgments

- Obsidian team for the amazing platform
- Community for feedback and suggestions
- All contributors who helped improve FlowType

## 📈 Roadmap

- [ ] Advanced typography rules
- [ ] Custom abbreviation dictionaries
- [ ] Multi-language support
- [ ] Batch processing for multiple files
- [ ] Integration with writing style guides

---

**Made with ❤️ for the Obsidian community**
