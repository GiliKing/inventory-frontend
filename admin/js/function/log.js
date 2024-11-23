const getLogs = (data) => {
    const logs = data.logs;
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    for (let index = 0; index < logs.length; index++) {
        const element = logs[index];
        const row = document.createElement('tr');
        let color = '';
        if(element.action_type == 'sold') {
            color = "success";
        } else if(element.action_type == 'added') {
            color = "primary";
        } else if(element.action_type == 'updated') {
            color = "warning";
        };
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="text-${color}">${element.action_type}</td>
            <td>${element.purchaser_name}</td>
            <td>${formatDate(element.timestamp)}</td>
            <td>
                <img src="./asset/eye.png" alt="edit">
                <a href="#" style="text-decoration: none; color: #213899;">View Change</a>
            </td>
        `;
        tableBody.appendChild(row);
    }
}


function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

export default getLogs;