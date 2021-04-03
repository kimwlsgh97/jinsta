import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { avatar, username, email, firstName, lastName, bio, intro } = args;
      const { user } = response.req;
      return prisma.updateUser({
        where: { id: user.id },
        data: { avatar, username, email, firstName, lastName, bio, intro },
      });
    },
  },
};
