# Technical Overview

## Project Structure

```
├── docs/                   # Project documentation
│   ├── OVERVIEW.md        # Technical overview and architecture
│   └── JOURNAL.md         # Development journal and decisions
├── src/                   # Source code
│   └── main.ts           # Application entry point
├── tests/                # Test files
│   └── smoke.spec.ts     # Smoke tests
├── test-results/         # Test execution artifacts
│   ├── report.json      # Test reports
│   └── .last-run.json   # Latest test run data
├── playwright.config.ts  # Playwright test configuration
└── package.json         # Project dependencies and scripts
```	

## Technologies Used

- **TypeScript** - Primary programming language
- **Playwright** - End-to-end testing framework
- **Node.js** - Runtime environment

## Testing Strategy

Our testing approach focuses on:

1. **Smoke Tests** - Basic functionality verification
2. **End-to-End Tests** - Full user journey validation
3. **Automated Reporting** - Test results and artifacts stored in `test-results/`

## Development Workflow

1. Feature development in `src/`
2. Documentation updates in `docs/`
3. Test coverage in `tests/`
4. Continuous testing using Playwright

## Best Practices

- Keep `JOURNAL.md` updated with key decisions
- Run smoke tests before commits
- Maintain comprehensive documentation



