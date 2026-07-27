---
name: modern-javascript-patterns
description: Use when writing or refactoring modern JavaScript (ES6+). Covers async/await, promises, destructuring, modules, functional programming patterns, and modern language features for clean and maintainable code.
---

# Modern JavaScript Patterns

Comprehensive guide for mastering modern JavaScript (ES6+) features, functional programming patterns, and best practices for writing clean, maintainable, and performant code.

## When to Use This Skill

- Refactoring legacy JavaScript to modern syntax
- Implementing functional programming patterns
- Optimizing JavaScript performance
- Writing maintainable and readable code
- Working with asynchronous operations
- Building modern web applications
- Migrating from callbacks to Promises/async-await
- Implementing data transformation pipelines

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. Use `const` by default.
2. Prefer `async/await` over Promise chains.
3. Handle errors with `try/catch`.
4. Prefer immutable operations.
5. Use destructuring and spread syntax.
6. Prefer array methods (`map`, `filter`, `reduce`).
7. Use optional chaining (`?.`) and nullish coalescing (`??`).
8. Write small, pure functions.
9. Use modules for organization.
10. Use meaningful names.
11. Use template literals.
12. Prefer arrow functions for callbacks.
13. Enable strict mode when applicable.
14. Use ES Modules (`import` / `export`) whenever the runtime supports them.
#### Web Application Recommendations

- Prefer `fetch` with `async/await`.
- Always check `response.ok` before reading the response body.
- Use `AbortController` for cancellable requests.
- Build query strings with `URLSearchParams`.
- Keep DOM manipulation separate from business logic.

For common pitfalls (this binding, promise anti-patterns, memory leaks), see [references/advanced-patterns.md](references/advanced-patterns.md).
