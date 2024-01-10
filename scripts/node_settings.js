var current_selected_setting = document.getElementById("node-settings-select").value



function render_settings(x1,x2,x3){
    // MAX 20 MIN 4
    document.getElementById("node-settings-svg").innerHTML = `

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

    <!-- min cx=4 max cx=20 -->
    <line x1="2" y1="6" x2="22" y2="6" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x1}" cy="6" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1"/>

    <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x2}" cy="12" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1" />

    <line x1="2" y1="18" x2="22" y2="18" stroke="rgba(4,170,93,0.601)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x3}" cy="18" r="2" stroke="#04AA5C" stroke-width="2" fill="#04AA5C" fill-opacity="1" />

    </svg>
    
    `
    // document.getElementById("node-settings").style.filter = '';

}

function rand(){
    var min = 4
    var max = 20
    return Math.floor(Math.random() * (max - min) + min)
}

function open_node_settings(){
    // console.log(rand())
    render_settings(rand(),rand(),rand())

    var node_settings = document.getElementById("node-settings-div")
    var site_visits = document.getElementById("site-visits")

    if(node_settings.classList.contains("hidden")){
        node_settings.classList.remove("hidden")
        node_settings.classList.add("shown")

        site_visits.classList.add("hidden")
        site_visits.classList.remove("shown")
    } else {
        node_settings.classList.add("hidden")
        node_settings.classList.remove("shown")

        site_visits.classList.remove("hidden")
        site_visits.classList.add("shown")
    }
}


let default_settings = {
    particle_count: {
        default : 50,
        max: 50,
        min: 50
    },
    colors: ["#04AA5C","white","lightblue"],
    acc: {
        default: 1,
        min: 0,
        max: 5
    },
    dec: {
        default: 1,
        min: 0,
        max: 5
    },
    particle_size: {
        default: 5,
        min: 1,
        max: 10
    },
    line_width: {
        default: 1,
        min: 1,
        max: 3
    },
    connectivity_distance: {
        default: 200,
        min: 1,
        max: 300
    }
}

{/* <input type="number" id="node-setting-value" value="50" min="1" max="50" onchange="set_particle_count(this.value)"/> */}

function select_settings_change(){
    current_selected_setting = document.getElementById("node-settings-select").value
    switch (current_selected_setting) {
        case "particle_count":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_particle_count()}" min="${default_settings.particle_count.min}" max="${default_settings.particle_count.max}" onchange="set_particle_count(this.value)"/>`
            break;

        case "acc":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_acc()}" min="${default_settings.acc.min}" max="${default_settings.acc.max}" onchange="set_acc(this.value)"/>`
            break;
        case "dec":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_dec()}" min="${default_settings.dec.min}" max="${default_settings.dec.max}" onchange="set_dec(this.value)"/>`
            break;
        case "particle_size":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_particle_size()}" min="${default_settings.particle_size.min}" max="${default_settings.particle_size.max}" onchange="set_particle_size(this.value)"/>`
            break;
        case "line_width":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_line_width()}" min="${default_settings.line_width.min}" max="${default_settings.line_width.max}" onchange="set_line_width(this.value)"/>`
            break;
        case "connectivity_distance":
            document.getElementById("node-settings-container").innerHTML = `<input type="number" id="node-setting-value" value="${get_connectivity_distance()}" min="${default_settings.connectivity_distance.min}" max="${default_settings.connectivity_distance.max}" onchange="set_connectivity_distance(this.value)"/>`
            break;

        case "colors":
            // TODO: colors will work differently
            get_colors();
            console.log("colors = " + get_colors())
            document.getElementById("node-settings-container").innerHTML = ``
            break;
        default:
            break;
    }
}

//! Some node settings will be rendered inside node.js... 
render_settings(7,20,12)

// TODO: remove this to start on site visits
// open_node_settings()