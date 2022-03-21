import Log from "./VentLog.ts";
import ELogLevel from "./ELogLevel.ts";

function main(): void {
  const log = new Log();
  log.setLevel(ELogLevel.Error);
  log.error("错误日志");
  log.warning("警告日志");
  log.info("普通日志");
  // log.showLog();
}

main();
