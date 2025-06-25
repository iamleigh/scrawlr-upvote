

# 🧩 Contributing to Scrawlr Upvote

I'm excited that you're interested in contributing to Scrawlr Upvote!
This project aims for clarity, modularity, and best practices in state management and React 19.

---

## 🚀 How to Contribute

1. **Fork the repository**  
2. **Create a new branch**  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes locally**
4. **Write or update tests when applicable**
5. **Ensure all tests pass**
   ```bash
   npx vitest
   ```
6. **Commit your changes with a descriptive message**
7. **Open a Pull Request**

---

## ✅ Contribution Guidelines

- Keep commits atomic and meaningful
- Follow the existing **Atomic Design** component structure
- Use consistent naming conventions (camelCase for variables, PascalCase for components)
- Don't forget to run `npm run format` if you've made code changes
- Add meaningful **comments** when implementing logic that's not obvious
- Cover new features or logic with tests (unit or component)

---

## 🧪 Local Testing

We use [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/) for unit testing.  
Run all tests locally with:

```bash
npx vitest
```

---

## 🧠 Design Philosophy

- Use context when shared state is needed across features
- Prefer small, stateless components when possible
- Persist data in the browser using versioned localStorage for durability and flexibility
- Favor composability and readability over cleverness

---

## 💬 Questions?

Have ideas, suggestions, or just want to talk shop?  
Open an issue or start a discussion — we're happy to collaborate.

---