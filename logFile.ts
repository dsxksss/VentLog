import getTime from "./getTime.ts";

const readLog = async (fileName: string) => {
  const filename = fileName;
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
