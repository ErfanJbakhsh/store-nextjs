import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "شماره موبایل",
        },
        password: {
          label: "رمز عبور",
        },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          phone: "9981703020",
          password: "3577",
        };
        if (
          credentials?.phone === user.phone &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
