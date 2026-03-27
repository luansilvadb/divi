# Specification: Configuration Optimization

## Overview
This specification defines the structural and formatting requirements for `openspec/config.yaml`.

## Requirements

### Requirement: YAML Syntax Validation
- **GIVEN** a raw `openspec/config.yaml` file.
- **WHEN** parsed by standard YAML 1.2 parsers.
- **THEN** it must not contain any syntax errors such as `MULTILINE_IMPLICIT_KEY`.

### Requirement: Indentation Consistency
- **GIVEN** any nested structure in the YAML.
- **WHEN** indented.
- **THEN** it must use exactly 2 spaces per indentation level.

### Requirement: Casing Standards
- **GIVEN** primary and secondary keys in the configuration.
- **WHEN** defined.
- **THEN** all keys must follow `snake_case` (e.g., `primary_goals`, `technical_skills`).

### Requirement: Multiline Formatting
- **GIVEN** a value that spans more than 100 characters or contains newlines.
- **WHEN** stored in YAML.
- **THEN** it must use the pipe symbols `|` or `>` for block scalar representation.

### Requirement: List Formatting
- **GIVEN** a collection of items (goals, constraints, etc.).
- **WHEN** listed.
- **THEN** it must use YAML sequence format (starting with `- `) instead of manual numbering.
