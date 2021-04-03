import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: (_, args) => {
      const { username } = args;
      return prisma.user({ username });
    },
  },
};

// export default {
//   Query: {
//     seeUser: async (_, args) => {
//       const { id } = args;
//       const user = await prisma.user({ id });
//       const posts = await prisma.user({ id }).posts();
//       return { user, posts };
//     },
//   },
// };
