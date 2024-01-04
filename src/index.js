const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name

  try{
 const file=await fs.appendFile('myfile.txt',"Newton School");
 console.log(file);
 return file;
  }catch(error){
  console.log(`error in create a file: ${error.message}`);
  return null;
  }
};

module.exports = { writeFile };
