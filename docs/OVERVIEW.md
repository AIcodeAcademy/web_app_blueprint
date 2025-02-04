# Technical Overview

## Project Structure

```
├── docs/                  # Project documentation
│   ├── OVERVIEW.md        # Technical overview and architecture
│   └── JOURNAL.md         # Development journal and decisions
├── src/                   # Source code
│   ├── main.ts            # Application entry point
│   ├── components/        # Components
│   ├── logic/             # Logic functions
│   ├── models/            # Models (types and interfaces)
│   ├── utils/             # Utility functions
│   └── styles/            # CSS styles
├── tests/                 # Test files specs
└── test-results/          # Test execution results
├── playwright.config.ts   # Playwright test configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project overview
```

## Technologies Used

- **TypeScript** - Primary programming language
- **Playwright** - End-to-end testing framework
- **Node.js** - Runtime environment
- **Pico CSS** - CSS framework

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
