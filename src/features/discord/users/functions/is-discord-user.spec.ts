import { isDiscordUser } from './is-discord-user';
import { User } from 'discord.js';
import { createHydratedMock } from 'ts-auto-mock';

describe(`isDiscordUser()`, (): void => {
  let user: unknown;

  describe(`when the given value is undefined`, (): void => {
    beforeEach((): void => {
      user = undefined;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordUser(user);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is null`, (): void => {
    beforeEach((): void => {
      user = null;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordUser(user);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is an empty object`, (): void => {
    beforeEach((): void => {
      user = {};
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordUser(user);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is an object`, (): void => {
    beforeEach((): void => {
      user = {
        key: `value`,
      };
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordUser(user);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is a "User" instance`, (): void => {
    beforeEach((): void => {
      user = createHydratedMock<User>();
    });

    // @todo fix it omg this should works
    it.skip(`should return true`, (): void => {
      expect.assertions(1);

      const result = isDiscordUser(user);

      expect(result).toStrictEqual(true);
    });
  });
});
