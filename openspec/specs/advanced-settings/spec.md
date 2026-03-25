# Specification: Advanced Settings (Mais)

## Goals

Define the functional and behavioral requirements for the new "Advanced Settings" page and its animated transition from the main settings screen.

## Requirements

### Requirement: Navigation to Advanced Settings
- **GIVEN** the user is viewing the main settings page (`MoreActionsPage.vue`)
- **WHEN** the user clicks on the "Mais opções" settings item
- **THEN** the system MUST trigger a View Transition and navigate to `/actions/advanced`

### Requirement: Hero Animation Visuals
- **GIVEN** the user is navigating to Advanced Settings
- **WHEN** the View Transition is active
- **THEN** the "Mais opções" item from the origin MUST expand and morph smoothly into the header of the destination page

### Requirement: Displaying Advanced Settings Layout
- **GIVEN** the user is on the Advanced Settings page
- **WHEN** the page is loaded
- **THEN** it MUST display three main categories: `Estilo`, `Transações`, and `Contas`
- **AND** it MUST include the following controls:
  - `Altura do cabeçalho`: Select (Option: Alto)
  - `Estilo de ícone`: Select (Option: Arredondado)
  - `Fonte`: Select (Option: Padrão)
  - `Animações`: Select (Option: Todos)
  - `Animação numérica`: Select (Option: Conte)
  - `Aumentar o contraste de texto`: Toggle
  - `Resumo dos gastos mensais`: Toggle

### Requirement: Dropdown Menu Aesthetics
- **GIVEN** a Select component is active (opened)
- **WHEN** the user interacts with the control
- **THEN** the dropdown menu MUST align with the trigger's rounded design language (12px radius)
- **AND** it MUST feature glassmorphism (translucency + blur) to match the "premium" system design.
- **AND** the menu items MUST have internal padding and rounded corners (8px) for a modern, cleaner appearance.

### Requirement: Back Navigation
- **GIVEN** the user is on the Advanced Settings page
- **WHEN** the user clicks the back button (Top-Left) OR presses the system back button
- **THEN** the system MUST navigate back to the main settings page
- **AND** the transition MUST reverse the hero effect if supported by the browser
