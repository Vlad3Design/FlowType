# Contributing to FlowType

Thank you for your interest in contributing to FlowType! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
- Use the [GitHub Issues](https://github.com/Vlad3Design/obsidian-flowtype/issues) page
- Include a clear description of the bug
- Provide steps to reproduce the issue
- Include your Obsidian version and operating system

### Feature Requests
- Use the [GitHub Issues](https://github.com/Vlad3Design/obsidian-flowtype/issues) page
- Describe the feature you'd like to see
- Explain why this feature would be useful
- Provide examples if possible

### Code Contributions
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🛠️ Development Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Git

### Installation
1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/obsidian-flowtype.git
   cd obsidian-flowtype
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

4. Copy `main.js` and `manifest.json` to your test vault's `.obsidian/plugins/flowtype/` folder

### Development Workflow
1. Make changes to `main.ts`
2. Run `npm run build` to compile
3. Test in Obsidian
4. Repeat until satisfied
5. Commit and push your changes

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Follow existing naming conventions
- Add proper type annotations
- Use meaningful variable and function names

### Comments
- Add comments for complex logic
- Use JSDoc comments for public functions
- Keep comments up to date with code changes

### Git Commits
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep commits focused and atomic

## 🧪 Testing

### Manual Testing
- Test all features thoroughly
- Test with different text inputs
- Test edge cases and error conditions
- Test on different operating systems if possible

### Test Cases
When adding new features, consider:
- Normal usage scenarios
- Edge cases (empty text, very long text, special characters)
- Error conditions
- Performance with large texts

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] Changes are tested in Obsidian
- [ ] No console errors or warnings

### PR Description
- Describe what the PR does
- Include screenshots if UI changes
- Reference related issues
- List any breaking changes

## 🎯 Areas for Contribution

### High Priority
- Bug fixes
- Performance improvements
- Documentation updates
- Test coverage improvements

### Medium Priority
- New text enhancement features
- UI/UX improvements
- Additional language support
- Integration with other plugins

### Low Priority
- Code refactoring
- Style improvements
- Additional examples
- Community outreach

## 📞 Getting Help

If you need help with contributing:
- Check existing issues and discussions
- Ask questions in GitHub Issues
- Review the codebase and documentation

## 🙏 Recognition

All contributors will be recognized in:
- The README file
- Release notes
- GitHub contributors page

Thank you for contributing to FlowType! 🚀 