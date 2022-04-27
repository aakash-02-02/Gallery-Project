var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById("panel-2")
var panel3 = document.getElementById("panel-3")
var panel4 = document.getElementById("panel-4")
var panel5 = document.getElementById("panel-5")

// 1st method(Easy Approach)

function resetActivePanel(){
    panel1.classList.remove('active');
    panel2.classList.remove('active');
    panel3.classList.remove('active');
    panel4.classList.remove('active');
    panel5.classList.remove('active');
}

function selectPanel(PanelNo) {

    resetActivePanel();
    
    switch (PanelNo) {
        case 1:
            panel1.classList.add("active");
            break;
        case 2:
            panel2.classList.add("active");
            break;
        case 3:
            panel3.classList.add("active");
            break;
        case 4:
            panel4.classList.add("active");
            break;
        case 5:
            panel5.classList.add("active");
            break;

    }
}

// 2nd Method(Most easiest approach)

// function resetActivePanel(){
//     panel1.classList.remove('active');
//     panel2.classList.remove('active');
//     panel3.classList.remove('active');
//     panel4.classList.remove('active');
//     panel5.classList.remove('active');
// }

// function selectPanel(PanelNo) {

//     resetActivePanel();
    
//     document.getElementById(PanelNo).classList.add("active");
// }

// 3nd Method(lengthy approach)

// let panelWithActive;

// function resetPanel(panelWithActive) {
    
//     switch (panelWithActive) {
//         case 1:
//             panel1.classList.remove("active");
//             break;
//         case 2:
//             panel2.classList.remove("active");
//             break;
//         case 3:
//             panel3.classList.remove("active");
//             break;
//         case 4:
//             panel4.classList.remove("active");
//             break;
//         case 5:
//             panel5.classList.remove("active");
//             break;
//     }
// }

// function selectPanel(PanelNo) {

//     resetPanel(panelWithActive);

//     panelWithActive = PanelNo;
    
//     switch (PanelNo) {
//         case 1:
//             panel1.classList.add("active");
//             break;
//         case 2:
//             panel2.classList.add("active");
//             break;
//         case 3:
//             panel3.classList.add("active");
//             break;
//         case 4:
//             panel4.classList.add("active");
//             break;
//         case 5:
//             panel5.classList.add("active");
//             break;

//     }
// }