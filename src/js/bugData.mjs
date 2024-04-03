export async function getAllBugReports(){
    try {
        const response = await fetch('https://bugtracker-hag1.onrender.com/bugs/');
        if (!response.body) {
            throw new Error('Network response was not ok. ' + response.status)
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export async function generateBugReports(){
let jsonDataArray = [];

let jsonData = getAllBugReports();
jsonDataArray.push(jsonData);

console.log(jsonDataArray)

}