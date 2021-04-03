import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, __, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { user } = response.req;
      const following = await prisma.user({ id: user.id }).following();
      //prisma에서 id가 user.id인 user의 following을 반환
      //console.log([...following.map((user) => user.id), user.id]);

      return prisma.posts({
        where: {
          user: {
            id_in: [...following.map((user) => user.id), user.id],
          },
        },
        orderBy: "createdAt_DESC",
      });
    },
  },
};
