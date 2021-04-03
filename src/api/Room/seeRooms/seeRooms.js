import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRooms: (_, __, { response, isAuthenticated }) => {
      isAuthenticated(response);
      const { user } = response.req;
      return prisma.rooms({
        where: {
          participants_some: {
            id: user.id,
          },
        },
      });
    },
  },
};
