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
            listItem.classList.add("report");
            listItem.setAttribute("id", bugReport._id);

            // Set the content of the <li> element with the bug report data
            listItem.innerHTML = 
                `<p><label>Bug Title:&nbsp </label>${bugReport.bugTitle}</p>
                <p><label>Date Discovered:&nbsp </label>${bugReport.dateDiscovered}</p>
                <p><label>Severity:&nbsp </label>${bugReport.severity}</p>
                <p><label>Bug Environment:&nbsp </label>${bugReport.environment}</p>
                <p><label>Expected Result:&nbsp </label>${bugReport.expectedResult}</p>
                <p><label>Actual Result:&nbsp </label>${bugReport.actualResult}</p>
                <p><label>Steps to Reproduce:&nbsp </label>${bugReport.stepsToReproduce}</p>

                <div class="actions">
                    <button class="edit-button" id="${bugReport._id}">Edit</button>
                    <button class="delete-button" id="${bugReport._id}">Delete</button>
                </div>`
            

            // Append the <li> element to the list
            bugList.appendChild(listItem);

            // Adds href and event listener to edit button on each card
            document.querySelectorAll('.edit-button').forEach(button => {
                button.addEventListener('click', function() {
                    const reportId = this.getAttribute('id')
                    window.location.href = `/edit.html?reportId=${reportId}`
                })
            })

            // Adds href and event listener to each document
            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function() {
                    const reportId = this.getAttribute('id')
                    window.location.href = `/delete.html?reportId=${reportId}`
                })
            })
        });
    } catch (error) {
        console.error('Error fetching bug reports: ', error);
    }
}