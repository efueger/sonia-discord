import {
  EmbedFieldData,
  MessageEmbedFooter,
  MessageEmbedOptions,
} from "discord.js";
import _ from "lodash";
import { AbstractService } from "../../../../../../classes/abstract.service";
import { ServiceNameEnum } from "../../../../../../enums/service-name.enum";
import { GithubConfigService } from "../../../../../github/services/config/github-config.service";
import { DiscordEmojiEnum } from "../../../../enums/discord-emoji.enum";
import { DiscordGuildConfigService } from "../../../../guilds/services/config/discord-guild-config.service";
import { DiscordSoniaService } from "../../../../users/services/discord-sonia.service";
import { IDiscordMessageResponse } from "../../../interfaces/discord-message-response";
import { DiscordMessageCommandCliErrorService } from "../discord-message-command-cli-error.service";
import { getDiscordMessageCommandAllFeatureNames } from "./functions/get-discord-message-command-all-feature-names";

export class DiscordMessageCommandFeatureErrorService extends AbstractService {
  private static _instance: DiscordMessageCommandFeatureErrorService;

  public static getInstance(): DiscordMessageCommandFeatureErrorService {
    if (_.isNil(DiscordMessageCommandFeatureErrorService._instance)) {
      DiscordMessageCommandFeatureErrorService._instance = new DiscordMessageCommandFeatureErrorService();
    }

    return DiscordMessageCommandFeatureErrorService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.DISCORD_MESSAGE_COMMAND_FEATURE_ERROR_SERVICE);
  }

  public getEmptyContentErrorMessageResponse(): Promise<
    IDiscordMessageResponse
  > {
    return DiscordMessageCommandCliErrorService.getInstance()
      .getCliErrorMessageResponse()
      .then(
        (
          cliErrorMessageResponse: Readonly<IDiscordMessageResponse>
        ): Promise<IDiscordMessageResponse> => {
          return Promise.resolve(
            _.merge(cliErrorMessageResponse, {
              options: {
                embed: this._getEmptyContentErrorMessageEmbed(),
                split: true,
              },
              response: ``,
            } as IDiscordMessageResponse)
          );
        }
      );
  }

  public getEmptyFeatureNameErrorMessageResponse(): Promise<
    IDiscordMessageResponse
  > {
    return DiscordMessageCommandCliErrorService.getInstance()
      .getCliErrorMessageResponse()
      .then(
        (
          cliErrorMessageResponse: Readonly<IDiscordMessageResponse>
        ): Promise<IDiscordMessageResponse> => {
          return Promise.resolve(
            _.merge(cliErrorMessageResponse, {
              options: {
                embed: this._getEmptyFeatureNameErrorMessageEmbed(),
                split: true,
              },
              response: ``,
            } as IDiscordMessageResponse)
          );
        }
      );
  }

  private _getErrorMessageEmbedFooter(): MessageEmbedFooter {
    const soniaImageUrl:
      | string
      | null = DiscordSoniaService.getInstance().getImageUrl();

    return {
      iconURL: soniaImageUrl || undefined,
      text: `Invalid feature command`,
    };
  }

  private _getErrorMessageEmbedTitle(): string {
    return `I can not handle your request ${DiscordEmojiEnum.WORRIED}`;
  }

  private _getEmptyContentErrorMessageEmbed(): MessageEmbedOptions {
    return {
      fields: this._getEmptyContentErrorMessageEmbedFields(),
      footer: this._getErrorMessageEmbedFooter(),
      title: this._getErrorMessageEmbedTitle(),
    };
  }

  private _getEmptyContentErrorMessageEmbedFields(): EmbedFieldData[] {
    return [
      this._getEmptyContentErrorMessageEmbedFieldError(),
      this._getEmptyContentErrorMessageEmbedFieldErrorReport(),
    ];
  }

  private _getEmptyContentErrorMessageEmbedFieldError(): EmbedFieldData {
    return {
      name: `Empty content`,
      value: `The content of the message is empty. ${DiscordEmojiEnum.THINKING}\nI can not process the feature command however this error should never happen! ${DiscordEmojiEnum.WARNING}\nDo not be so selfish and share this information with my creators! ${DiscordEmojiEnum.PRAY}`,
    };
  }

  private _getEmptyContentErrorMessageEmbedFieldErrorReport(): EmbedFieldData {
    const githubBugReportUrl: string = GithubConfigService.getInstance().getBugReportUrl();
    const discordSoniaPermanentGuildInviteUrl: string = DiscordGuildConfigService.getInstance().getSoniaPermanentGuildInviteUrl();

    return {
      name: `Help me to help you`,
      value: `You can create a [bug report](${githubBugReportUrl}) or reach my creators on [discord](${discordSoniaPermanentGuildInviteUrl}).`,
    };
  }

  private _getEmptyFeatureNameErrorMessageEmbed(): MessageEmbedOptions {
    return {
      fields: this._getEmptyFeatureNameErrorMessageEmbedFields(),
      footer: this._getErrorMessageEmbedFooter(),
      title: this._getErrorMessageEmbedTitle(),
    };
  }

  private _getEmptyFeatureNameErrorMessageEmbedFields(): EmbedFieldData[] {
    return [
      this._getEmptyFeatureNameErrorMessageEmbedFieldError(),
      this._getEmptyFeatureNameErrorMessageEmbedFieldErrorReport(),
    ];
  }

  private _getEmptyFeatureNameErrorMessageEmbedFieldError(): EmbedFieldData {
    return {
      name: `Empty feature name`,
      value: `You did not specify the name of the feature you wish to configure. ${DiscordEmojiEnum.FACE_WITH_RAISED_EYEBROW}\nI will not guess it for you so please try again with a feature name!\nAnd because I am kind and generous here is the list of all the features you can configure. ${DiscordEmojiEnum.GIFT_HEART}`,
    };
  }

  private _getEmptyFeatureNameErrorMessageEmbedFieldErrorReport(): EmbedFieldData {
    return {
      name: `All features`,
      value: _.trimEnd(
        _.reduce(
          getDiscordMessageCommandAllFeatureNames(),
          (value: Readonly<string>, featureName: Readonly<string>): string => {
            return `${value}\`${_.capitalize(featureName)}\`, `;
          },
          ``
        ),
        `, `
      ),
    };
  }
}
