import { prisma } from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { id, caption, location, action } = args;
      const { user } = response.req;
      const post = await prisma.$exists.post({ id, user: { id: user.id } });
      //존재여부에 따라 Boolean값 반환
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            data: {
              caption,
              location,
            },
            where: { id },
          });
        } else if (action === DELETE) {
          return prisma.deletePost({ id });
        }
      } else {
        throw Error("You can't do that");
      }
    },
  },
};
