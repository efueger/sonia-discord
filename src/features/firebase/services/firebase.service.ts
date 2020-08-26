import _ from "lodash";
import { AbstractService } from "../../../classes/abstract.service";
import { ServiceNameEnum } from "../../../enums/service-name.enum";
import { FirebaseGuildsStoreService } from "../stores/guilds/services/firebase-guilds-store.service";
import { FirebaseAppService } from "./firebase-app.service";
import { FirebaseGuildsBreakingChangeService } from "./firebase-guilds-breaking-change.service";
import { FirebaseGuildsNewVersionService } from "./firebase-guilds-new-version.service";
import { FirebaseGuildsService } from "./firebase-guilds.service";

export class FirebaseService extends AbstractService {
  private static _instance: FirebaseService;

  public static getInstance(): FirebaseService {
    if (_.isNil(FirebaseService._instance)) {
      FirebaseService._instance = new FirebaseService();
    }

    return FirebaseService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.FIREBASE_SERVICE);
  }

  public async init(): Promise<true> {
    FirebaseAppService.getInstance().init();
    await FirebaseGuildsService.getInstance().init();
    FirebaseGuildsNewVersionService.getInstance().init();
    FirebaseGuildsStoreService.getInstance().init();
    await FirebaseGuildsBreakingChangeService.getInstance()
      .init()
      .then((): void => {
        FirebaseGuildsService.getInstance().watchGuilds();
      });

    return true;
  }
}
