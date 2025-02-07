# Prompts

Copy and paste the following prompts into your code agent chat to activate the code generation tool. **Adapt to specific tools, cursor, windsurf, vscode, etc.**

## Architect

```text
Follow the instructions in architect.instructions.md to generate the architecture blueprint following the architect.template.md template and save it as architect.blueprint.md
```

```text
Use the architect.blueprint.md file as a reference to change any project and author information at: readme.md, package.json, index.html, and docs/ and src/components/ folders
```

## Builder

```text
Follow the instructions in builder.instructions.md to generate the construction blueprint following the builder.template.md template and save it as builder.blueprint.md
```

```text
Review the builder.blueprint.md file and make sure it can be used as a prompt for a code generation tool. Ensure it is written in a way that makes sense to code, and double-check naming conventions and coding rules and respect current folder structure and tech stack.
```

```text
Execute the plan from the builder.blueprint.md file to generate the project's code. Think step by step and execute one step at a time. Choose the most straightforward approach. Follow project rules and coding conventions.
```

## Craftsman

```text
Follow the instructions in craftsman.instructions.md to generate the improvement blueprint following the craftsman.template.md template and save it as craftsman.blueprint.md
```

```text
Review the craftsman.blueprint.md file and make sure it can be used as a prompt for a code generation tool. Ensure it is written in a way that makes sense to code, and double-check naming conventions and coding rules and respect current folder structure and tech stack.
```

```text
Execute the plan from the craftsman.blueprint.md file to generate the project's code. Think step by step and execute one step at a time,ask the user to create a commit for each step. Choose the most straightforward approach. Follow project rules and coding conventions.
```
