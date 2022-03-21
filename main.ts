import Log from "./VentLog.ts";

function main(): void {
  const log = new Log();
  log.info("你好胖");
  log.error("严重错误");
  log.warning("警告错误");
  log.showLog();
}

main();
