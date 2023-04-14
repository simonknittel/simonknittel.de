# simonknittel.de

## Technologies

This project has been setup with the [T3 App](https://create.t3.gg/) stack initially.

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [React Icons](https://github.com/react-icons/react-icons)
- [Terraform](https://www.terraform.io/)

## Usage

### Requirements

- [nvm](https://github.com/nvm-sh/nvm)

### Setup

1. Configure environment variables: Duplicate `app/.env.example` to `app/.env` and fill in the blanks.
2. Install required Node.js version: `nvm use`
3. Start up the database: `docker compose up`
4. Update the database's schema: `npx prisma db push`
5. Run the app: `cd app/ && npm run dev`
6. Access the app at: <http://localhost:3000>

## License

See [LICENSE](./LICENSE)
