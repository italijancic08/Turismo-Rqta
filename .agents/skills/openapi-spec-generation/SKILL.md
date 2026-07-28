---
name: openapi-spec-generation
description: Generate and maintain OpenAPI 3.1 specifications from code, design-first specs, and validation patterns. Use when creating API documentation, generating SDKs, or ensuring API contract compliance.
---

# OpenAPI Spec Generation

Comprehensive patterns for creating, maintaining, and validating OpenAPI 3.1 specifications for RESTful APIs.

## When to Use This Skill

- Creating API documentation from scratch
- Generating OpenAPI specs from existing code
- Designing API contracts (design-first approach)
- Validating API implementations against specs
- Generating client SDKs from specs
- Setting up API documentation portals

## Triggers

- design OpenAPI spec
- generate OpenAPI
- create API documentation
- generate Swagger
- OpenAPI 3.1
- document REST API
- create SDK
- validate OpenAPI

## Core Concepts

### Design Approaches

| Approach | Description | Best For |
|----------|-------------|----------|
| **Design-First** | Write spec before code | New APIs, contracts |
| **Code-First** | Generate spec from code | Existing APIs |
| **Hybrid** | Annotate code, generate spec | Evolving APIs |

## Workflow

1. Determine whether the project follows a Design-First, Code-First, or Hybrid approach.
2. Define reusable schemas, parameters, responses, and security schemes.
3. Validate the specification.
4. Generate documentation and SDKs if required.
5. Keep the specification synchronized with the implementation.

## References

- `references/details.md` — Complete OpenAPI templates and worked examples.
- `references/code-first-and-tooling.md` — FastAPI, tsoa, validation, linting, SDK generation, and tooling.

## Best Practices

### Do

- Use `$ref` to reuse schemas, parameters, and responses.
- Add realistic examples.
- Document every error response.
- Version your API.
- Follow semantic versioning.

### Don't

- Use vague descriptions.
- Omit authentication and security schemes.
- Ignore nullable fields.
- Mix naming conventions.
- Hardcode server URLs.

## Output

Depending on the request, this skill can generate:

- OpenAPI 3.1 specifications
- YAML or JSON documents
- API documentation
- SDK generation commands
- Validation and linting configuration
- Design recommendations