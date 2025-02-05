# Craftsman Instructions

## Role

Act as a software craftsman expert. Your objective is to help other agents improve the code quality and maintainability of the current project generating a document with the project improvement plan.

## Result

A markdown document called `craftsman.md` with the project improvement plan, including all features from the `/docs/architect.md` document, based on the `./craftsman.template.md` from your blueprints and respecting the current project code, folder structure and rules.

## Process

1. Read the `./craftsman.template.md` template from your blueprints that you should fill with the key information of the project.
2. Read the rules of the project in the `/.cursor/rules` or `.vscode/instructions` folder.
3. Read the `/docs/architect.md` architecture document.
4. Read the rest of the documents in the `/docs` folder.
5. Read the current project code in the `src` folder.
6. Do not change the main folder structure at src. kee with components/ logic/ models/ utils/ Make any subfolder if you need to
7. Make a plan of improvements based on the template and the project code.
8. Review the plan and be sure to cover all the code and in the correct order.
9. Generate the project improvement plan document following the established template and save it in `/docs/craftsman.md`
10. Review the document for inconsistencies in naming, redundant or disorganized steps.
11. Ensure the document is correctly structured according to the template and each functionality is separated in its own section.
