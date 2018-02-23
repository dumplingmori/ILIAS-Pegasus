import {Injectable} from "@angular/core";
import {isDevMode} from "../app/devmode";
import {DatabaseConfigurationAdapter, DatabaseConnectionRegistry} from "../services/database/database.api";
import {VisibilityEntity} from "../learnplace/entity/visibility.entity";
import {LocationEntity} from "../learnplace/entity/location.entity";
import {MapEntity} from "../learnplace/entity/map.entity";
import {LearnplaceEntity} from "../learnplace/entity/learnplace.entity";
import {TextblockEntity} from "../learnplace/entity/textblock.entity";
import {PictureBlockEntity} from "../learnplace/entity/pictureBlock.entity";
import {VisitJournalEntity} from "../learnplace/entity/visit-journal.entity";
import {LinkblockEntity} from "../learnplace/entity/linkblock.entity";
import {VideoBlockEntity} from "../learnplace/entity/videoblock.entity";
import {UserEntity} from "../entity/user.entity";
import {NewsEntity} from "../entity/news.entity";

export const PEGASUS_CONNECTION_NAME: string = "ilias-pegasus";

/**
 * Configuration adapter for typeORM connections.
 *
 * @author nmaerchy <nm@studer-raimann.ch>
 * @version 1.0.1
 */
@Injectable()
export class TypeORMConfigurationAdapter implements DatabaseConfigurationAdapter {

  /**
   * Adds the {@link PEGASUS_CONNECTION_NAME} to the registry.
   *
   * @param {DatabaseConnectionRegistry} registry - the database connection registry
   */
  addConnections(registry: DatabaseConnectionRegistry): void {
    registry.addConnection(PEGASUS_CONNECTION_NAME,
        it =>
          it.cordova()
            .setDatabase("ilias_app")
            .setLocation("default")
            .enableLogging(isDevMode())
            .addEntity(
              LearnplaceEntity,
              LocationEntity,
              MapEntity,
              VisibilityEntity,
              TextblockEntity,
              PictureBlockEntity,
              VideoBlockEntity,
              LinkblockEntity,
              VisitJournalEntity,
              UserEntity,
              NewsEntity
            )
    );
  }
}
