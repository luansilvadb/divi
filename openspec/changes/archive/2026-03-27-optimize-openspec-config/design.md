# Design: OpenSpec Configuration Optimization

## Overview
This design outlines the standardization of `openspec/config.yaml` to ensure cross-platform compatibility and efficient parsing by agentic tools.

## Implementation Details
1. **Lowercase Keys**: Use `snake_case` for all primary and secondary keys to improve consistency.
2. **Standard Indentation**: Enforce exactly 2 spaces globally.
3. **Block Scalars**: Use the YAML pipe (`|`) for multiline text blocks (e.g., `background`, `context`, `description`). This allows natural line breaks without breaking the parser.
4. **Arrays for Listings**: Convert manual numbered lists (e.g., `1. ...`) into JSON-compatible YAML arrays (`- ...`).
5. **Quotes for Mixed Content**: Ensure strings with special characters or mixed languages are quoted where necessary to avoid type inference issues.

## Risks / Trade-offs
- **Breaking Changes**: External tools relying on exact key casing (e.g., `Background` vs `background`) would need to be updated. Since the current CLI is already failing to parse, this risk is managed.
- **Readability**: While more "efficient" for machines, some users might prefer the "human-like" numbered lists. However, the system's accuracy is prioritized for automation.
