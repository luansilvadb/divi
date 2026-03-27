# Spec: Unified Animation Cascade

## ADDED Requirements

### Requirement: Unified Entry Animation
- **GIVEN** the Advanced Settings page is entering the view
- **WHEN** the Shared Layout background transition completes
- **THEN** the title "Mais" should slide up from `y: 20` to `y: 0` with a `0.1s` delay, matching the style of the categories.

### Requirement: Cascade Stagger
- **GIVEN** the page contains Title, Section 1, and Section 2
- **WHEN** they enter the viewport
- **THEN** they should animate in a predictable sequence:
  - Title: 0.1s
  - ESTILO: 0.2s
  - TRANSAÇÕES: 0.3s
- **THEN** all components should use the same `spring` physics for their slide-up motion.
