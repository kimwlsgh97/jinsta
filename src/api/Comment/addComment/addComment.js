import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addComment: (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { text, postId } = args;
      const { user } = response.req;
      return prisma.createComment({
        user: {
          connect: {
            id: user.id,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
        text,
      });
    },
  },
};
