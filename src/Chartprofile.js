// monScript.js
export default function Chartprofile() {
    var xValues = ["Pausing", "Slow speech", "Breathing", "Smooth speech", "Easy onset"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
           
            title: {
                display: true,
                text: "Les statistiques du temps passé dans les exercices."
            }
            
        }
    });
}