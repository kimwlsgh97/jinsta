import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { user } = response.req;
      const { caption, files } = args;
      const post = await prisma.createPost({
        caption,
        user: {
          connect: {
            id: user.id,
          },
        },
      });
      files.forEach(async (file) => {
        await prisma.createFile({
          url: file,
          post: {
            connect: {
              id: post.id,
            },
          },
        });
      });
      return post;
    },
  },
};
