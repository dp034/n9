(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/09/",
        birthday = dayMonth + yyyy ;
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
          const now = new Date().getTime(),
                distance = countDown - now;
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            document.getElementById("ttxt").style.display = "none";
            document.getElementById("content").style.display = "none";
            document.getElementById("tttk").style.display = "none";
            document.getElementById("img1").style.display="none";
            document.getElementById("countdown").style.color = "white";
          if (distance < 0) {
            document.getElementById("content").style.display = "block";
            document.getElementById("countdown").style.color = "#ffffff";
            document.getElementById("headline").innerText = " 愛 ";
            document.getElementById("headline").style.color = "pink";
            document.getElementById("headline").style.fontsize = "40px";
            document.getElementById("ttxt").style.display="block";
            document.getElementById("ttxt").style.fontSize = "50px";
            document.getElementById("content").style.display = "block";
            document.getElementById("tttk").style.display = "block";
            document.getElementById("img1").style.display = "block";
          }
        }, 0)
    } 
     ());
document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {
            var inpFld = document.getElementById("oop");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);
