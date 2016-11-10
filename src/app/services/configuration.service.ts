import CommonConfig from "../config/common";
import DevConfig from "../config/development";
import ProdConfig from "../config/production";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigurationService {
    authentication_service_url: string;

    constructor() {
        Object.assign(this, CommonConfig());
        if (process.env.ENV != 'production') {
            return Object.assign(this, DevConfig());
        } else {
            return Object.assign(this, ProdConfig());
        }
    }
}


