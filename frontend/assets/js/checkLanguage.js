import {localStorageGet} from "./localStorageSaverAndGet";

export default () => {
    return localStorageGet("language");
}