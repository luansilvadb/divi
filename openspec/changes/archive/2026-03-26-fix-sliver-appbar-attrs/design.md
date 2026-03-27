# Design: Fix SliverAppBar Attribute Inheritance Warning

## Technical Strategy
`SliverAppBar.vue` uses multiple root nodes (`.sliver-app-bar` and `.sliver-spacer`). When attributes are passed, Vue requires intentionality about where these attributes land.

### 🛠️ Vue 3 Implementation
- **defineOptions**: Use this within the `<script setup>` block to tell Vue "I'll handle attributes manually".
- **v-bind="$attrs"**: Place this on the main header container.

### 🔗 Mapping
- **Input**: Any attribute passed to `<SliverAppBar ... class="some-class-here" />`
- **Output**: The class will be applied to the `.sliver-app-bar` element.

### 🛡️ Non-Interference
The `.sliver-spacer` will NOT inherit attributes. This prevents potential layout issues that might occur if the spacer accidentally inherited styles (like background or borders) meant for the header.

## Integration Plan
1. Edit `SliverAppBar.vue`.
2. Add `defineOptions({ inheritAttrs: false })`.
3. Update the template to include `v-bind="$attrs"`.
4. Confirm transparency in other components that might use custom attributes with SliverAppBar.
