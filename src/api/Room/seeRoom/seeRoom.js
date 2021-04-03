import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRoom: async (_, args, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { id } = args;
      const { user } = response.req;
      const existRoom = await prisma.$exists.room({
        participants_some: {
          id: user.id,
        },
      });
      if (existRoom) {
        return prisma.room({ id });
      } else {
        throw Error("You have not room yet.");
      }
    },
  },
};
