import getTime from "./getTime.ts";

const readLog = async (fileName: string) => {
  const filename = fileName;
  /*
  另一种方法是直接用Deno.readTextFile(<文件名>);
  此方法不需要创建解码器,自动读取可读的text类的编码文件
  */
  //创建utf-8解码器
  const fileDecoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(filename);
  //输出解码后的信息
  console.log(fileDecoder.decode(data));
};

const writeLog = async (fileName: string, data: string) => {
  const filename = fileName;
  //创建编码器
  const fileEncoder = new TextEncoder();
  await Deno.writeFile(
    filename,
    //编码后写入信息至文件
    fileEncoder.encode(`${data} \t[${getTime()}]\n`),
    {
      append: true, //以追加模式写入
    }
  );
};

export { readLog, writeLog };
