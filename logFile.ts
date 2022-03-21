import getTime from "./getTime.ts";

const readLog = async (fileName: string) => {
  const filename = fileName;
  const fileCode = new TextDecoder("utf-8");
  const data = await Deno.readFile(filename);
  console.log(fileCode.decode(data));
};

const writeLog = async (fileName: string, data: string) => {
  const filename = fileName;
  const fileWrite = new TextEncoder();
  await Deno.writeFile(filename, fileWrite.encode(`${data} \t${getTime()}\n`), {
    append: true,
  });
};

export { readLog, writeLog };
