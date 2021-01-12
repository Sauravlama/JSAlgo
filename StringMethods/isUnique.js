function makeHashMap(str)
{
    let collections={}
    for (let i=0;i<str.length;i++)
{
    if(collections[str.toLowerCase().charAt(i)]!=undefined)
    {
        collections[str.toLowerCase().charAt(i)]=++collections[str.toLowerCase().charAt(i)];

    }
    else
    {
        collections[str.toLowerCase().charAt(i)]=1;
    }
}

return collections;
}

function isUnique(hashMaps)
{
    let sum=0;
    for (const occurances in hashMaps)
{
    if(hashMaps[occurances]>1)
    {
        return false;
    }
}

return true;
}


let checkStr="abcdefghijklmm"
checkStr = checkStr.replace(/ +/g, "");
const hashMap=makeHashMap(checkStr)
const result=isUnique(hashMap)



console.log(result)



