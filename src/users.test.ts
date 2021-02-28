jest.mock("./prisma");

import { getUsers } from "./users";
import { prisma } from "./prisma";

const mockedPrismaUsersFindMany = prisma.user.findMany as jest.MockedFunction<
  typeof prisma.user.findMany
>;

test("get users", async () => {
  mockedPrismaUsersFindMany.mockResolvedValueOnce([]);
  const result = await getUsers();
  expect(result).toEqual([]);
});
