const a = document.getElementById("a");
const b = document.getElementById("b");
const operation = document.getElementById("operation");
const button = document.getElementById("submit");
const result = document.getElementById("result");


button.addEventListener("click", () => {
    get('http://localhost:63342/');
});



function get(url) {
        let req = new XMLHttpRequest();
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.onload = function () {
            if (req.status === 200) {
                console.log("200 OK")
                const jResp = JSON.parse(req.response);
                result.innerText = "Result: " + jResp.response;
            } else {
                console.log(req.statusText);

            }
        };
        req.onerror = function () {
            console.log("Network error")
        }
        console.log("sending json")
        req.send(JSON.stringify({"a": a.value, "b": b.value, "operation": operation.value}));
    }


