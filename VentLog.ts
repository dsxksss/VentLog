enum ELogLevel {
  "Error" = 0,
  "Warning",
  "Info",
}
class Log {
  private level: ELogLevel = ELogLevel.Info;
  public constructor() {
    this.level = ELogLevel.Info; //默认设置为INFO输出级别
  }
  public setLevel(logEvel: ELogLevel): void {
    this.level = logEvel;
  }
  public error(msg: string): void {
    if (this.level >= ELogLevel.Error)
      console.log("\u001b[31m[Error]:", msg, "\u001b[0m");
  }
  public warning(msg: string): void {
    if (this.level >= ELogLevel.Warning)
      console.log("\u001b[33m[Warning]:", msg, "\u001b[0m");
  }
  public info(msg: string): void {
    if (this.level >= ELogLevel.Info)
      console.log("\u001b[34m[Info]:", msg, "\u001b[0m");
  }
}

const obj = new Log();
obj.setLevel(ELogLevel.Info);
obj.error("我是错误信息");
obj.warning("我是警告信息");
obj.info("我是重要信息");
