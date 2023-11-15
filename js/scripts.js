function handleFormSubmit(e) {
    e.preventDefault();
    // It will gather form data
    let name = document.getElementById("name").value;
    let answer1 = document.querySelector("input[name=question1]:checked").value;
    let answer2 = document.querySelector("input[name=question2]:checked").value;
    let answer3 = document.querySelector("input[name=question3]:checked").value;
    let answer4 = document.querySelector("input[name=question4]:checked").value;
    let answer5 = document.querySelector("input[name=question5]:checked").value;

    // Reset suggestions section
    document.getElementById("suggestion1").style.display = "none";
    document.getElementById("suggestion2").style.display = "none";
    document.getElementById("suggestion3").style.display = "none";

    // It will determine result and display suggestion
    if (answer1 === "Yes" && answer2 === "Yes") {
        document.getElementById("suggestion1").style.display = "block";
    } else if (answer3 === "Yes" && answer4 === "Yes") {
        document.getElementById("suggestion2").style.display = "block";
    } else if (answer5 === "Yes") {
        document.getElementById("suggestion3").style.display = "block";
    } else {
        document.getElementById("suggestion1").style.display = "block";
    }

    // Display user's name in suggestions 
    document.querySelector(".user_name").textContent = name;
}
function reset() {
    document.getElementById("reset-button").addEventListener("click", () => {
        let form = document.getElementById("fillout-form")
        form.reset()
        document.getElementById("suggestion1").style.display = "none";
        document.getElementById("suggestion2").style.display = "none";
        document.getElementById("suggestion3").style.display = "none";
    })
};

window.addEventListener("load", () => {
    let form =document.getElementById("fillout-form")
    form.addEventListener("submit", handleFormSubmit)
    reset()
})
