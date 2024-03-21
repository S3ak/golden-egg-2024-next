import { GenerateMockOptions, generateMock } from "@anatine/zod-mock";
import { faker } from "@faker-js/faker";
import { UserSchema } from "@/lib/schema";
import { z } from "zod";

const seed = 1;

export const currentUser = generateMock(UserSchema, {
  seed,
  stringMap: {
    id: faker.string.uuid,
    displayName: faker.person.fullName,
  },
});

/**
 * @author Dan Bahrami
 * @link https://danbahrami.hashnode.dev/generating-test-data-with-zod
 * @description This utility takes a Zod schema and returns a data factory function. Calling the function will return test data but you can pass in field values that you want to hardcode.
 */
export const dataFactory =
  <T extends z.ZodTypeAny>(schema: T) =>
  (overrides?: Partial<z.infer<T>>, options?: GenerateMockOptions) => ({
    ...generateMock(schema, options),
    ...overrides,
  });
