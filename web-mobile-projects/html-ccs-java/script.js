window.addEventListener("load", function ()
{
  let counter = 0;

  function buttonClicked()
  {
    counter++;
    
    let clickedCounterElement = document.getElementById("clickcounter");

    clickedCounterElement.innerHTML = "this is a span that counts button clicks: " + counter + " clicks."
  }

  let clickedButtonElement = document.getElementById("clickbutton");

  clickedButtonElement.addEventListener("click", buttonClicked);
});