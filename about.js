const apiEndpoint = "https://api.github.com/repos/hannahjblair/talponia-chat/readme";
const targetContainer = document.getElementById("read-me");

async function displayReadMe() {
    try {
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
            throw new Error("Could not load ReadMe'");
        }

        const data = await response.json();

        //decodes the base-64 content to readable text
        //https://base64.guru/learn/what-is-base64#:~:text=Base64%20is%20most%20commonly%20used,transfer%2C%20storage%2C%20or%20output.
        const readMeContent = atob(data.content);

       const readMeMarkdown = marked.parse(readMeContent);

        targetContainer.innerHTML = readMeMarkdown;

    } catch (error) {
        targetContainer.innerHTML = `Error: ${error.message}`;
    }
}

displayReadMe();
