import { DiscordMessageCommandFeatureReleaseNotesFlagEnum } from './discord-message-command-feature-release-notes-flag.enum';
import { getEnumLength } from '../../../../../../../../../functions/checks/get-enum-length';

describe(`DiscordMessageCommandFeatureReleaseNotesFlagEnum`, (): void => {
  it(`should have a 10 members`, (): void => {
    expect.assertions(1);

    expect(getEnumLength(DiscordMessageCommandFeatureReleaseNotesFlagEnum)).toStrictEqual(10);
  });

  it(`should have a member "D"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.D).toStrictEqual(`d`);
  });

  it(`should have a member "DISABLED"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.DISABLED).toStrictEqual(`disabled`);
  });

  it(`should have a member "E"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.E).toStrictEqual(`e`);
  });

  it(`should have a member "ENABLED"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.ENABLED).toStrictEqual(`enabled`);
  });

  it(`should have a member "H"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.H).toStrictEqual(`h`);
  });

  it(`should have a member "HELP"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.HELP).toStrictEqual(`help`);
  });

  it(`should have a member "HU"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.HU).toStrictEqual(`hu`);
  });

  it(`should have a member "HUMANIZE"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.HUMANIZE).toStrictEqual(`humanize`);
  });

  it(`should have a member "S"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.S).toStrictEqual(`s`);
  });

  it(`should have a member "STATUS"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandFeatureReleaseNotesFlagEnum.STATUS).toStrictEqual(`status`);
  });
});
