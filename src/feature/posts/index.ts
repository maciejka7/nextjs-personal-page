import { promises as fs } from "fs";

const extensions = [".mdx", ".md"];

function checkItsDirectory(dirString: string): boolean {
    let result = false;
    extensions.forEach((ext) =>
        dirString.includes(ext) ? (result = true) : (result = false)
    );
    return result;
}

export type Post = {categorie : string , posts: string[]}

async function createTableOfContents(files: string[], dir: string): Promise<Post[]> {

   let result = []
   
   for (let index = 0; index < files.length; index++) {
       const element = files[index];
       
       if(!checkItsDirectory(element)) {
        const data = await readFromDirectory(`${dir}/${element}`)
        result.push({[element]: data});
                     
       } else {
           result.push(element);
           
       }
   }   
   return result;   
}


const readFromDirectory = async (dirString: string) =>
    await fs.readdir(dirString);

export async function getAllPosts() {
    const postsFolder = "./posts";
    const files = await readFromDirectory(postsFolder);
    const postsTree = await createTableOfContents(files, postsFolder);
    return postsTree;
}
