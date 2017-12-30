import {PonModule} from "../../../../res/module/PonModule";

export class Test extends PonModule {
    constructor() {
        super(
            "./res/modules/test/index.html"
            , "./res/modules/test/index.css");
    }
}