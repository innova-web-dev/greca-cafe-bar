# Project Guidelines & Rules

## Package Manager

- **Mandatory Package Manager**: Always use `pnpm` (configured in `package.json`).
- Do **not** use `npm`, `yarn`, or `bun`.
- Always install dependencies using `pnpm add` or `pnpm install`.
- Execute packages or tool binaries with `pnpm dlx` instead of `npx`.
- Run scripts using `pnpm <command>` or `pnpm run <command>`.
- Maintain `pnpm-lock.yaml` as the sole lockfile. Never generate or commit `package-lock.json` or `yarn.lock`.
