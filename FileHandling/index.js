import { readFile, writeFile , appendFile} from "fs/promises";

//readFile
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};
read_file("sample.txt");

//create file

const create_File = (fileName, content) => {
  writeFile(fileName, content);
  console.log('file created !')
};
create_File('testing.txt','hello this is testing file creating using file module ')

//add extra data
const append_file=async (fileName,content)=>{
    appendFile(fileName,content)
    console.log('data added !')
}
append_file('testing.txt','this is extra content added using append file')

