import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteComment: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { postId } = args;
      const { user } = response.req;
      const comment = await prisma.$exists.comment({
        id: postId,
        user: { id: user.id },
      });
      if (comment) {
        return prisma.deleteManyComments({ id: postId });
      } else {
        throw Error("You can't do that");
      }
    },
  },
};
