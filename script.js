var d = 0;
        var W = 0; // Initialize W with a default value

        window.onload = function() {
            // Retrieve the values from localStorage and set them
            var llo1 = localStorage.getItem('llo');
            var text177 = document.getElementById("text177");
            var llo11 = localStorage.getItem('ll11');

            if (llo1 !== null) {
                text177.innerText = llo1;
            } else {
                text177.innerText = '0kr';
            }

            if (llo11 !== null) {
                text377.innerText = llo11;
                W = parseInt(llo11) / 100;
            } else {
                text377.innerText = parseInt(10000) / 100 + ' Max';
            }

            updateWidthAndPercentage();
        }

        function t() {
            var v = document.getElementById("SL").value;
            var k = document.getElementById("text177");
            var hej = Number(v);

            if (d === 1) {
                k.innerText = (parseInt(k.innerText) - hej) + 'kr';
            } else if (d === 3) {
                W = parseInt(hej) / 100;
            } else {
                k.innerText = (parseInt(k.innerText) + hej) + 'kr';
            }

            var text377 = document.getElementById("text377");
            text377.innerText = W * 100 + ' Max';

            updateWidthAndPercentage();
            saveToLocalStorage();
        }

        function A() {
            var q = document.getElementById('checkbox');
            var r = document.getElementById('gii');

            if (q.checked) {
                r.innerText = '-';
                d = 1;
            } else {
                r.innerText = '+';
                d = 0;
            }
        }

        function AA() {
            d = 3;
        }

        function add(S, SS) {
            var k = document.getElementById("text177");

            if (SS === '2') {
                k.innerText = (parseInt(k.innerText) - S) + 'kr';
            } else {
                k.innerText = (parseInt(k.innerText) + S) + 'kr';
            }

            updateWidthAndPercentage();
            saveToLocalStorage();
        }

        function updateWidthAndPercentage() {
            var k = document.getElementById("text177");
            var k1 = document.getElementById("text277");
            var kk = document.getElementById("boxL");
            var text377 = document.getElementById("text377");

            var currentValue = parseInt(k.innerText);
            var jj = (currentValue / W) * 6;
            var jj1 = (currentValue / W); // Updated to give percentage

            kk.style.width = jj + 'px';
            k1.innerText = jj1.toFixed(2) + '%'; // Fixed to two decimal places
        }

        function saveToLocalStorage() {
            var k = document.getElementById("text177");
            localStorage.setItem('llo', k.innerText);

            var text377 = document.getElementById("text377");
            localStorage.setItem('ll11', text377.innerText);
        }

        function saveToFile() {
            var data = {
                llo: document.getElementById("text177").innerText,
                ll11: document.getElementById("text377").innerText
            };
            var blob = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "data.lll";
            link.click();
        }

        function loadFromFile() {
            var input = document.getElementById("fileInput");
            var file = input.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var data = JSON.parse(e.target.result);
                document.getElementById("text177").innerText = data.llo;
                document.getElementById("text377").innerText = data.ll11;
                W = parseInt(data.ll11) / 100;
                updateWidthAndPercentage();
                saveToLocalStorage();
            };
            reader.readAsText(file);
        }
        MediaDeviceInfo
