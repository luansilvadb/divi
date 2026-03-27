# Proposal: Optimize OpenSpec Configuration

## Goal
Improve the `openspec/config.yaml` file by fixing indentation, correcting YAML syntax errors, and standardizing the structure for better efficiency and machine readability.

## Motivation
The previous configuration file contained:
- **YAML Syntax Errors**: Multiline implicit keys were causing parse failures in the `openspec` CLI.
- **Inconsistent Indentation**: Mixing space counts and structure patterns.
- **Case Inconsistency**: Mixing PascalCase and camelCase in keys.
- **Efficiency Bottlenecks**: Long strings were not formatted as multiline blocks, making the file harder to read and parse.

Fixing these issues ensures the `openspec` tool operates correctly and provides a solid foundation for agent autonomy.

## Impact
- **System**: `openspec` CLI will now parse the config correctly.
- **Agent**: Improved clarity on persona rules and constraints.
- **Maintenance**: Cleaner, standard YAML structure is easier to update.
