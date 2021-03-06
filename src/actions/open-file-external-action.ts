import {ILIASObject} from "../models/ilias-object";
import {ILIASObjectAction, ILIASObjectActionAlert} from "./object-action";
import {FileService} from "../services/file.service";
import {ILIASObjectActionResult} from "./object-action";
import {ILIASObjectActionNoMessage} from "./object-action";

export class OpenFileExternalAction extends ILIASObjectAction {

    constructor(public title: string,
                       public fileObject: ILIASObject,
                       public file: FileService) {
        super();
    }

    execute(): Promise<ILIASObjectActionResult> {
        return new Promise((resolve, reject) => {
            this.file.existsFile(this.fileObject).then(() => {
                this.file.open(this.fileObject).then(() => {
                    resolve(new ILIASObjectActionNoMessage());
                }, (error) => {
                    reject(error);
                });
            }, (error) => {
                reject(error);
            });
        });
    }

    alert(): ILIASObjectActionAlert {
        return null;
    }

}