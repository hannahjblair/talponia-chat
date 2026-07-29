
const apiEndpoint = "https://api.github.com/repos/hannahjblair/talponia-chat/readme";
const targetContainer = document.getElementById("read-me");

async function displayReadMe() {
    try {
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
            throw new Error("Could not load ReadMe'");
        }

        const data = await response.json();

        const readMeContent = atob(data.content);


        document.getElementById("read-me").innerHTML = readMeContent;

    } catch (error) {
        targetContainer.innerHTML = `Error: ${error.message}`;
    }
}

displayReadMe();



 // const decodedContent = atob(data.content);