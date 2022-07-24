function addKeyword(input, occ)
{     
    //clear list
    document.getElementById("keywordList").innerHTML = "";

    //get keywords
    const keywords = input.replace(/[^a-z0-9]/gi, ' ')
                            .split(" "); 

    //creates empty map for new filtered keword list
    let keywordMap = new Map();

    //iterates over keyword list
    for(let x=0; x<keywords.length; x++)
    {
        //looks at single item from list
        let item = keywords[x].toLowerCase();

       if(item.length > 2)
       {
        //checks for words to ignore
        if(item.includes("\n") 
        || item.includes("\r") 
        || item.includes("and") 
        || item.includes("with") 
        || item.includes("our") 
        || item.includes("or")
        || item.includes("are") 
        || item.includes("the") 
        || item.includes("has")
        || item.includes("you")
        || item.includes("all")
        || item.includes("life")
        || item.includes("will")
        || item.includes("can")
        || item.includes("who")
        || item.includes("this")
        || item.includes("that")
        || item.includes("for"))
        {
            continue;
        }
        else
        {
            if(keywordMap.has(item))
            {
                let value = keywordMap.get(item); //gets value from given keyword
                keywordMap.set(item, parseInt(value) + 1); //adds 1 to that value and updates it back in the map
            }
            else
            {
                //item not in map, adding item to map
                keywordMap.set(item, 1);
            }
        }
       }
    }
  
    let sortedMap = new Map([...keywordMap.entries()].sort((a,b) => b[1] - a[1]))

    //loop over every keyword
    for (let [key, value] of sortedMap) 
    {
       if(value >= occ)
       {
            //create li new li item of keyword
            var li = document.createElement("li");
                     document.getElementById("keywordList")
                             .appendChild(li)

                //add the keyword to the list
                .textContent = value +": "+key;
       }
    }
}

