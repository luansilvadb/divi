# Specs: Fix SliverAppBar Attribute Inheritance Warning

## ADDED Requirements

### Requirement: Attr Silence
- **WHEN** using `SliverAppBar`
- **THEN** the browser console MUST NOT show warnings about "Extraneous non-props attributes (class) were passed to component".

### Requirement: Explicit Control
- **WHEN** a custom attribute is passed from the parent (e.g., `class="my-sliver-style"`)
- **THEN** it must be visible as a DOM attribute on the `.sliver-app-bar` element.

### Requirement: Spacer Isolation
- **WHEN** the `show-spacer` prop is `true`
- **THEN** the spacer element must remain untouched by parent-passed attributes (except explicitly defined props) to avoid visual bugs like double-styling.
