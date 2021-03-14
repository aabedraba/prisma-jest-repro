import { getUsers } from "./users";
import { prisma } from "./prisma";
jest.mock("./prisma", () => {
  return {
    prisma: {
      user: {
        findMany: jest.fn(),
      },
    },
  };
});

const mockedPrismaUsersFindMany = prisma.user.findMany as jest.MockedFunction<
  typeof prisma.user.findMany
>;

test("get users", async () => {
  console.log(prisma);
  mockedPrismaUsersFindMany.mockResolvedValueOnce([]);
  const result = await getUsers();
  expect(result).toEqual([]);
});
