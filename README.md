This is a project in Stephen Grider's NextJS [Udemy course](https://www.udemy.com/course/next-js-the-complete-developers-guide)


## Tech Stack
- React 18 with Next 14.0.2
- CSS: tailwindcss
- UI: nextui + Framer Motion 
- Auth: Authjs/nextauth
- DB: Prisma initially using SQLite




## To run locally:

Then, run the development server:

```bash
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Add OAuth
- Go to [settings]( https://github.com/settings/applications/new) in your github profile 

- Fill in the information

e.g., DEV discuss / http://localhost:3000/ / description / http://localhost:3000/api/auth/callback/github

- Click on register application button which will bring up your client ID and secret. Copy these to our .env file