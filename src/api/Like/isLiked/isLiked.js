import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    isLiked: (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { id } = args;
      const { user } = response.req;
      return prisma.$exists.like({
        AND: [
          {
            user: { id: user.id },
          },
          {
            post: { id },
          },
        ],
      });
    },
  },
};
