## Architect

- Follow the instructions in @architect.instructions.md to generate the architecture document following the @architect.template.md template and save it in docs/architect.md
- Use the @architecture.md file as a reference to change any project and author information at: readme.md, package.json, docs/overview.md, index.html, src/components/*

## Builder

- Follow the instructions in @builder.instructions.md to generate the construction document following the @builder.template.md template and the architecture document in @architecture.md and save it in the @docs folder with the name build.md
- Review the @builder.md file and make sure it can be used as a prompt for a code generation tool. Ensure it is written in a way that makes sense to code, and double-check naming conventions and coding rules.
- Execute the plan from the @builder.md file to generate the project's code. Think step by step and execute one step at a time. Choose the most straightforward approach. Follow project rules and coding conventions.

## Craftsman

- Follow the instructions in @craftsman.instructions.md based on @craftsman.template.md and the architecture document @architect.md Save the result at @docsfolder. Ensure the coding, testing, and release sections follow the @rules 
- Review the @craftsman.md file and make sure it can be used as a prompt for a code generation tool. Ensure it is written in a way that makes sense to code and double-check naming conventions and coding rules.
- Execute the plan from the @craftsman.md file to generate the project's code. Think step by step and execute one step at a time, create a commit for each step. Choose the most straightforward approach. Follow project rules and coding conventions.
