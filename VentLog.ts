import ELogLevel from "./ELogLevel.ts";
import { readLog, writeLog } from "./logFile.ts";
class VentLog {
  private fileName = "VentLog.log";
  private level: ELogLevel = ELogLevel.Info;
  public constructor() {
    this.level = ELogLevel.Info; //默认设置为INFO输出级别
  }
  public setLevel(logEvel: ELogLevel): void {
    this.level = logEvel;
  }
  public error(msg: string): void {
    if (this.level >= ELogLevel.Error) {
      const data = `[Error]: ${msg}`;
      writeLog(this.fileName, data);
      console.log("\u001b[31m", data, "\u001b[0m");
    }
  }
  public warning(msg: string): void {
    if (this.level >= ELogLevel.Warning) {
      const data = `[Warning]: ${msg}`;
      writeLog(this.fileName, data);
      console.log("\u001b[33m", data, "\u001b[0m");
    }
  }
  public info(msg: string): void {
    if (this.level >= ELogLevel.Info) {
      const data = `[Info]: ${msg}`;
      writeLog(this.fileName, data);
      console.log("\u001b[34m", data, "\u001b[0m");
    }
  }
  public showLog(): void {
    readLog(this.fileName);
  }
}

export default VentLog;

// const obj = new Log();
// obj.setLevel(ELogLevel.Info);
// obj.error("我是错误信息");
// obj.warning("我是警告信息");
// obj.info("我是重要信息");
