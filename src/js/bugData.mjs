export async function getAllBugReports(){
    try {
        const response = await fetch('https://bugtracker-hag1.onrender.com/bugs/');
        if (!response.ok) {
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

export async function displayBugReports() {
    try {
        // Fetch bug reports from the API
        const bugReports = await getAllBugReports();

        // Get the element where you want to display the bug reports
        const bugList = document.getElementById('report-wrapper');

        // Iterate through each bug report in the array
        bugReports.forEach(bugReport => {
            // Create an <li> element
            const listItem = document.createElement('div');
            listItem.classList.add("report")

            // Set the content of the <li> element with the bug report data
            listItem.innerHTML = 
                `<div class="report-line"><h3>Bug Title:&nbsp </h3><p>${bugReport.bugTitle}</p></div>
                <div class="report-line"><h3>Date Discovered:&nbsp </h3><p>${bugReport.dateDiscovered}</p></div>
                <div class="report-line"><h3>Bug Environment:&nbsp </h3><p>${bugReport.environment}</p></div>
                <div class="report-line"><h3>Severity:&nbsp </h3><p>${bugReport.severity}</p></div>
                <div class="report-line"><h3>Expected Result:&nbsp </h3><p>${bugReport.expectedResult}</p></div>
                <div class="report-line"><h3>Actual Result:&nbsp </h3><p>${bugReport.actualResult}</p></div>
                <div class="report-line bottom-line"><h3>Steps to Reproduce:&nbsp </h3><p>${bugReport.stepsToReproduce}</p></div>

                <div class="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>`
            

            // Append the <li> element to the list
            bugList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching bug reports: ', error);
    }
}