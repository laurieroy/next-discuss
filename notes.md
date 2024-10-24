This is a project in Stephen Grider's NextJS [Udemy course](https://www.udemy.com/course/next-js-the-complete-developers-guide)


- React 18 with Next 14.0.2
Next14.2 has an issue with NextUI

- CSS: tailwindcss

- UI: nextui + Framer Motion 
I'll switch this out eventually
- Auth: Authjs/nextauth

- DB: Prisma initially using SQLite

Form validation with zod
I was having an issue with a webdevsimplified project i'm making where the errors aren't coming through, so checking here.

He is much more step by step which i guess is good.

  if (!result.success) {
    console.log(result.error.errors)
  }
  returns:
  {
    issues: [ [Object], [Object] ],
    addIssue: [Function (anonymous)],
    addIssues: [Function (anonymous)],
    errors: [ [Object], [Object] ]
  }

  in lecture he says:
   if (!result.success) {
    console.log(result.error.flatten().fieldErrors)
  }
  but i still get the same obj. {
    issues: [ [Object], [Object] ],
    addIssue: [Function (anonymous)],
    addIssues: [Function (anonymous)],
    errors: [ [Object], [Object] ]
  }

  codium recommends:
    if (!result.success) {
    console.log(result.error.errors.map((error) => error.message));
    return null;
  }

  back in client, get this with useFormState
  often get this error:
    const [formState, action] = useFormState(actions.topicCreate, {
    
  })

  the 2nd arg is initial value for formState
  they all need to be same type of TS obj
  (server action formState, return type and client init val)

  - create interace, use this as type.
  or z.infer<typeof createTopicSchema>

  in client display with {formState.errors.name.join(",)} etc
  since using nextui lib

for errors such as, you must be signed in, create a var in the zod validation and call in the form
action: (in interface) _form?: string[];
 const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in"],
      },
    };
  }
  return {
    errors: {},
  };
client: {formState.errors._form?.join(", ")}

in branch newTopic, i get a proper error back
.1/node_modules/next/dist/server/base-server.js:798:17) {
  issues: [
    {
      code: 'too_small',
      minimum: 3,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'Name must be at least 3 characters',
      path: [Array]
    },
    {
      validation: 'regex',
      code: 'invalid_string',
      message: 'Name must not contain any spaces and must be lowercase or dashes',
      path: [Array]
    },
    {
      code: 'too_small',
      minimum: 10,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'Description must be at least 10 characters',
      path: [Array]
    }
  ],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)],
  errors: [
    {
      code: 'too_small',
      minimum: 3,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'Name must be at least 3 characters',
      path: [Array]
    },
    {
      validation: 'regex',
      code: 'invalid_string',
      message: 'Name must not contain any spaces and must be lowercase or dashes',
      path: [Array]
    },
    {
      code: 'too_small',
      minimum: 10,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'Description must be at least 10 characters',
      path: [Array]
    }
  ]
}

now to flatten

  // test db error by     throw new Error("Not implemented");
  // after try