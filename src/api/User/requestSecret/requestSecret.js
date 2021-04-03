import { prisma } from "../../../../generated/prisma-client";
import { generateSecret, sendSecretMail } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      //console.log(response);
      const { email } = args;
      const loginSecret = generateSecret();
      // throw Error("kskskdskjdj");
      //console.log(loginSecret);
      try {
        //throw Error();
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
