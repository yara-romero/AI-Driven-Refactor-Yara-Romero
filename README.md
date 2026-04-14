# AI-Driven Refactor: From Spaghetti Code to Page Object Model (POM)

This repository serves as the final deliverable for the assignment on refactoring legacy automation scripts using AI. The goal of this project is to demonstrate how fragile, hardcoded automation tests can be migrated to the **Page Object Model (POM)** design pattern using Large Language Models (LLMs) like ChatGPT or Claude.

## 🎯 The Objective

1. **Identification**: Select legacy Playwright tests with hardcoded selectors (acting as "spaghetti code").
2. **Prompt Engineering**: Document the exact prompts used to guide an AI in analyzing the legacy code.
3. **Generation**: Use the AI to generate sustainable, DRY (Don't Repeat Yourself) `Page` classes and refactored test files.
4. **Validation**: Validate that both the legacy suite and the refactored suite yield the exact same behavior and assertions.

## 📁 Repository Structure

```
.
├── legacy/                  # Contains the original tests with hardcoded selectors.
├── refactored/              # The modernized suite grouped by the POM pattern.
│   ├── pages/               # Page Object classes (e.g., loginPage.ts)
│   └── tests/               # Refactored tests abstracting away UI locators
├── prompts.md               # Contains the prompt engineering workflow used with the AI
└── playwright.config.ts     # Configuration setup for parallel test execution
```

## 🛠️ Stack & Resources
- **Framework**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Target Site**: The Internet (HerokuApp)
- **AI Assisted**: ChatGPT / Claude

## 🚀 How to Run the Tests

To validate that the refactoring preserves all application behavior, run the commands below. Ensure you have the dependencies installed first:

```bash
# Install dependencies
npm install
npx playwright install
```

**1. Run the Legacy (Spaghetti) Suite:**
```bash
npx playwright test legacy
```

**2. Run the Refactored (POM) Suite:**
```bash
npx playwright test refactored
```

Both commands should display full passing results, indicating a successful functional migration!