function generatePlan() {

    let name = document.getElementById("projectName").value;
    let area = document.getElementById("area").value;
    let budget = document.getElementById("budget").value;
    let type = document.getElementById("type").value;

    if (name === "" || area === "" || budget === "") {
        alert("Please fill all fields!");
        return;
    }

    // Simple AI Logic Simulation
    let duration;
    let workers;
    let materialCost;

    if (type === "residential") {
        duration = area / 500;
        workers = 5 + (area / 1000);
        materialCost = budget * 0.6;
    } else {
        duration = area / 300;
        workers = 10 + (area / 800);
        materialCost = budget * 0.7;
    }

    duration = Math.round(duration);
    workers = Math.round(workers);

    let output = `
        <h3>AI Generated Plan for ${name}</h3>
        <p><b>Estimated Duration:</b> ${duration} months</p>
        <p><b>Recommended Workers:</b> ${workers}</p>
        <p><b>Estimated Material Cost:</b> ₹${materialCost}</p>
        <p><b>Risk Level:</b> ${budget < 1000000 ? "High (Low Budget)" : "Moderate"}</p>
        <p><b>AI Suggestion:</b> ${
            budget < 1000000
            ? "Increase budget to avoid delays."
            : "Project is financially stable."
        }</p>
    `;

    document.getElementById("output").innerHTML = output;
}
