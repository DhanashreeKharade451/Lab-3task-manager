answers for Reflection Questions
////////////////////////////////

Q1. How did you ensure unique keys for your list items?
Ans:

{tasks.map((task) => (
  <TaskItem key={task.id} ... />
))}

Each Task has a unique id field.
React requires stable and unique keys for list rendering.
Using task.id prevents rendering bugs and unnecessary re-renders.

I avoided using array index (index) because:
It can cause UI bugs when deleting or reordering items.
It does not remain stable when list changes.

Used a persistent unique identifier (id) instead of array position.

**************************************************************
Q2. What considerations did you make when implementing the filtering functionality?
Ans:
const filteredTasks = tasks.filter((task) => {
  if (filters.status && task.status !== filters.status) return false;
  if (filters.priority && task.priority !== filters.priority) return false;
  return true;
});

-Here I applied Filtering logic is inside App.tsx, not in TaskList,  because: tasks state lives in app.
-In TaskFilter.tsx when user selects "all"
status: value === "all"? undefined : value
If filter value is undefined, we skip filtering.
Makes filter logic clean and simple.

-Multiple Filters
Each condition is checked independently.

Used .filter() which:
Returns a new array
Keeps original tasks intact.

******************************************************
Q3. How did you handle state updates for task status changes?

Ans:
const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    )
  );
};

Here I Used .map() method to Create new array , Update only the matching task and Preserve other tasks

setTasks((prev) => ...)
- This ensures ,Always works with latest state and Avoids stale state bugs.

- TaskItem does NOT change state directly.
It calls onStatusChange and Parent updates state


********************************************************************
Q4. What challenges did you face when implementing conditional rendering?
Ans:
if (tasks.length === 0) {
  return <p>No tasks found.</p>;
}

Challenges:
-- Needed to check filtered list, not original list.
If filtering removes all items, message should appear.

--If "all" was treated as a real value, filtering would break.
Solution:
Convert "all" → undefined.

--select had no value, No onChange
This caused:   
UI not updating properly,State not syncing
/////////////////////////////////////////////////////////////////////////////
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
-

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
