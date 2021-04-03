import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    unfollow: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { id } = args;
      const { user } = response.req;
      try {
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            following: {
              disconnect: {
                id,
              },
            },
          },
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
