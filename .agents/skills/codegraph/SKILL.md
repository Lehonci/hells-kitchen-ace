---
name: codegraph
description: >-
  Pre-indexed AST knowledge graph and code intelligence for any codebase.
  Use when exploring codebase structure, searching for symbols or functions,
  analyzing call graphs (callers/callees), tracing dependencies, or performing
  impact analysis before modifying code.
---

# CodeGraph Intelligence Skill

CodeGraph provides pre-indexed AST knowledge graph navigation using Tree-sitter and SQLite.
It allows fast semantic navigation of code symbols, call paths, dependency trees, and change impact without blind file scans.

## When to Use

- Finding definitions, usages, and symbols across the codebase
- Tracing call hierarchies (`callers`, `callees`)
- Impact analysis before refactoring or changing code (`impact`, `affected`)
- Exploring relationships between components, interfaces, and routes

## Available CLI Commands

When MCP tools are active, you can use `codegraph_explore` / `codegraph_node`, or execute the CLI directly:

```powershell
# 1. Search for a symbol or function name
codegraph query <symbol_name>

# 2. Explore an area (symbol source + call paths)
codegraph explore <query>

# 3. View a single symbol's source and caller/callee trail
codegraph node <symbol_or_path>

# 4. Find all callers of a function/method
codegraph callers <symbol>

# 5. Find all functions called by a symbol
codegraph callees <symbol>

# 6. Analyze impact of changing a symbol
codegraph impact <symbol>

# 7. Check affected tests or dependent files
codegraph affected [files...]

# 8. Check index status or re-index after large changes
codegraph status
codegraph sync
```

## Best Practices

1. **Impact Check Before Refactor:** Run `codegraph impact <symbol>` before modifying shared utilities or component props.
2. **Explore Flow:** Use `codegraph callers <function>` to see how data flows into a function before making changes.
3. **Syncing:** CodeGraph monitors changes automatically, but after major branch changes or checkouts, running `codegraph sync` ensures index freshness.

