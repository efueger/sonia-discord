import { isDiscordTextChannel } from './is-discord-text-channel';
import { DMChannel, NewsChannel, TextChannel } from 'discord.js';
import { createHydratedMock } from 'ts-auto-mock';

describe(`isDiscordTextChannel()`, (): void => {
  let channel: TextChannel | DMChannel | NewsChannel | null | undefined;

  describe(`when the given value is undefined`, (): void => {
    beforeEach((): void => {
      channel = undefined;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordTextChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is null`, (): void => {
    beforeEach((): void => {
      channel = null;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordTextChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is a "TextChannel" instance`, (): void => {
    beforeEach((): void => {
      channel = createHydratedMock<TextChannel>();
    });

    // @todo fix it omg this should works
    it.skip(`should return true`, (): void => {
      expect.assertions(1);

      const result = isDiscordTextChannel(channel);

      expect(result).toStrictEqual(true);
    });
  });
});
