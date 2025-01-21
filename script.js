function invisible() {
    document.querySelectorAll(".chairs").forEach((chair) => {
      chair.style.opacity = "0";
    });
  }

  document.getElementById("c1").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "rgb(237 146 146)";
    document.getElementById("chair1").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor = "#fa6a6a";
  });
  document.getElementById("c2").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("chair2").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor = "#626262";
  });
  document.getElementById("c3").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "#a298f9";
    document.getElementById("chair3").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor = "#8f4fd9";
  });
  document.getElementById("c4").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "rgb(130 179 255)";
    document.getElementById("chair4").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor =
      "rgb(63 135 245)";
  });
  document.getElementById("c5").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "rgb(143 124 118)";
    document.getElementById("chair5").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor =
      "rgb(76 65 61)";
  });
  document.getElementById("c6").addEventListener("click", () => {
    invisible();
    document.body.style.backgroundColor = "grey";
    document.getElementById("chair6").style.opacity = "1";
    document.querySelector(".button").style.backgroundColor = "#585454";
  });

  document.querySelector(".button").addEventListener("click", () => {
    let quant = prompt("Enter the quantity of chairs to order");
    if (quant) {
      alert(
        `Your order for ${quant} chairs has been placed,Thankyou for using our service `
      );
    } else {
      alert(`No problem!,Your ORDER is Cancelled`);
    }
  });