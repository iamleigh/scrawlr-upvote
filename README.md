# Scrawlr Upvote

A React 19 application showcasing a simple upvote panel system with persistent state, context-based architecture, and clean component composition following Atomic Design principles.

## ✨ Features

- ✅ Add and manage multiple upvote lists
- 🔄 Persistent state using `localStorage` with versioning and migration
- ♻️ Reusable components and modular context architecture
- 💾 Backward-compatible data format with fallbacks
- ⚛️ Built using React 19 + Vite + TypeScript
- 🧪 Unit tested context logic using Vitest + React Testing Library

## 📦 Tech Stack

- **Framework**: [React 19](https://react.dev)
- **Tooling**: [Vite](https://vitejs.dev), TypeScript
- **Testing**: [Vitest](https://vitest.dev), [React Testing Library](https://testing-library.com/)
- **State Management**: React Context + Custom Hook
- **Persistence**: Local Storage with versioning support
- **Design Structure**: Atomic Design Principles

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/iamleigh/scrawlr-upvote.git
cd scrawlr-upvote
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Running Tests

```bash
npm run test
```

Runs all unit tests in the `/contexts/__tests__` folder, covering:

- Context initialization
- State updates
- Migration/version fallback logic

Runs all unit tests in the `components/molecules/UpvoteList` folder, covering:

- Rendered upvote buttons
- Upvotes summary visibility
- Upvote button triggers toggle

## 🧠 Architecture

This project follows a modular structure, with strong separation of concerns:

```
src/
├── components/                        # Atomic UI components
│   └── atoms/
│   └── molecules/
│   └── organisms/
│   └── templates/
│       ├── UpvoteLayout/
│           └── UpvoteLayout.tsx       # The main screen layout
├── contexts/
│   └── upvote/
│       ├── context.tsx
│       ├── useUpvote.ts
│       ├── utils.ts
│       ├── storage.ts
│       ├── types.ts
│       ├── constants.ts
│       └── __tests__/
├── App.tsx
└── main.tsx
```

## 🔧 Configuration

You can tweak the following constants in `contexts/upvote/constants.ts`:

```ts
export const DEFAULT_COUNT = 3;
export const STORAGE_KEY = 'scrawlr-upvotes';
export const STORAGE_VERSION = 1;
export const MAX_UPVOTE_LISTS = 5;
```

## 🧩 Example Behavior

- Add multiple upvote lists (max 5)
- Each list displays upvotes (max 5 visible) + a count badge (e.g. `+3`)
- Data persists across refreshes
- Reset button restores the default state (1 or 3 lists depending on version)

## 📄 License

MIT © Leighton Quito

---

# Contributing to Scrawlr Upvote

We welcome contributions from the community!

## 🛠 How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

## ✅ Contribution Guidelines

- Ensure all new code is covered by unit tests
- Maintain consistency with the project's code style
- Write clear, descriptive commit messages
- Keep PRs focused and atomic

## 💬 Questions or Suggestions?

Feel free to open an issue or start a discussion in the repo.
