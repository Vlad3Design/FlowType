# Changelog

All notable changes to FlowType will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Advanced typography rules
- Custom abbreviation dictionaries
- Multi-language support
- Batch processing for multiple files
- Integration with writing style guides

## [1.0.0] - 2025-06-30

### Added
- **Auto Capitalization**: Automatic sentence and proper noun capitalization
- **Smart Punctuation**: Intelligent spacing and punctuation corrections
- **Smart Quotes**: Professional curly quotes and apostrophe handling
- **Number Formatting**: Comma formatting for large numbers and currency
- **Basic Abbreviations**: Standardization of common abbreviations and titles
- **Context Menu Integration**: Right-click menu with all FlowType functions
- **Command Palette Support**: Access via Ctrl/Cmd + P
- **Settings Panel**: Toggle individual features with examples
- **Comprehensive Documentation**: Detailed README with examples

### Features
- **Auto Capitalization**:
  - Sentence capitalization after periods, exclamation marks, question marks
  - Personal pronoun "I" capitalization
  - Dialogue capitalization
  - Proper noun capitalization (days, months, holidays)
  - Colon capitalization for complete sentences

- **Smart Punctuation**:
  - Automatic spacing after punctuation marks
  - Multiple space removal and normalization
  - Parentheses and quote spacing corrections
  - Ellipsis conversion (…)
  - Dash spacing improvements

- **Smart Quotes**:
  - Straight to curly quote conversion
  - Alternating opening/closing quotes
  - Apostrophe handling in contractions
  - Possessive apostrophe corrections

- **Number Formatting**:
  - Comma formatting for numbers ≥ 1000
  - Currency formatting with decimal places
  - Ordinal number corrections (1st, 2nd, 3rd, etc.)
  - Percentage spacing

- **Basic Abbreviations**:
  - Title capitalization (Dr, Mr, Mrs, Prof, etc.)
  - Country abbreviation standardization (USA, UK, US)
  - Latin abbreviation formatting (i.e., e.g., etc.)
  - Sentence capitalization after abbreviations

### Technical
- TypeScript implementation
- Obsidian Plugin API integration
- esbuild for production builds
- Comprehensive error handling
- Performance optimized regex patterns

### Documentation
- Detailed README with examples
- Installation instructions
- Usage guidelines
- Settings documentation
- Contributing guidelines

## [0.1.0] - 2025-01-XX

### Added
- Initial plugin structure
- Basic text processing framework
- Development environment setup
- Build configuration

---

## Version History

- **1.0.0**: First stable release with all core features
- **0.1.0**: Initial development version

## Migration Guide

### From 0.1.0 to 1.0.0
- All features are new, no migration required
- Settings are automatically configured with defaults
- No breaking changes
