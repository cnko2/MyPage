// script.js
document.getElementById('searchButton').addEventListener('click', searchEmployees);
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // 當按下 Enter 鍵時觸發搜尋
        searchEmployees();
    }
});

function searchEmployees() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    
    // 清空之前的結果
    resultDiv.innerHTML = '';

    // 搜尋匹配的員工
    const filteredEmployees = employees.filter(emp => 
        emp.工號.includes(input) || emp.姓名.toLowerCase().includes(input)
    );

    if (filteredEmployees.length > 0) {
        filteredEmployees.forEach(employee => {
            resultDiv.innerHTML += `
                <!--<h2>搜尋結果:</h2>-->
                <table>
                    <tr>
                        <th>序號</th>
                        <td>${employee.序號}</td>
                    </tr>
                    <tr>
                        <th>處級代碼</th>
                        <td>${employee.處級代碼}</td>
                    </tr>
                    <tr>
                        <th>處級名稱</th>
                        <td>${employee.處級名稱}</td>
                    </tr>
                    <tr>
                        <th>工號</th>
                        <td>${employee.工號}</td>
                    </tr>
                    <tr>
                        <th>姓名</th>
                        <td>${employee.姓名}</td>
                    </tr>
                    <tr>
                        <th>職稱</th>
                        <td>${employee.職稱}</td>
                    </tr>
                    <tr>
                        <th>是否參加年終晚會</th>
                        <td>${employee.是否參加年終晚會}</td>
                    </tr>
                    <tr>
                        <th>飲食習慣</th>
                        <td>${employee.飲食習慣}</td>
                    </tr>
                    <tr>
                        <th>是否搭乘(去程)交通車</th>
                        <td>${employee.是否搭乘去程交通車}</td>
                    </tr>
                    <tr>
                        <th>是否搭乘(回程)交通車</th>
                        <td>${employee.是否搭乘回程交通車}</td>
                    </tr>
                </table>

                <!--<h3>位置資訊</h3>-->
                <table class="location-info">
                    <tr><th>方向</th><th>樓</th><th>區</th><th>排</th><th>號</th></tr>
                    <tr><td>${employee.方向}</td><td>${employee.樓}</td><td>${employee.區}</td><td>${employee.排}</td><td>${employee.號}</td></tr></table>`;
        });
        
        // 如果有多筆結果，顯示總數
        resultDiv.innerHTML = `<h4>找到 ${filteredEmployees.length} 筆結果:</h4>` + resultDiv.innerHTML;
        
    } else {
        resultDiv.innerHTML = '<p>找不到該工號或姓名。</p>';
    }
}
