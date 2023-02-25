let datas = []

function getData(event) {
    event.preventDefault()

    let title = document.getElementById("project-name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("description").value
    let image = document.getElementById("input-image").files

    let nodejs = document.getElementById("nodejs").checked
    let reactjs = document.getElementById("reactjs").checked
    let java = document.getElementById("java").checked
    let javascript = document.getElementById("javascript").checked

    let icons = [nodejs, reactjs, java, javascript];

    image =  URL.createObjectURL(image[0])

    if (title == "") {
        return alert("Project Name is required")
    } else if (startDate == "") {
        return alert("Start Date is required")
    } else if (endDate == "") {
        return alert("End Date is required")
    } else if (description == "") {
        return alert("Description is required")
    }
    let data  = {
        title,
        description,
        image,
        icons,
    }

    datas.push(data)
    console.log(datas)
    showData()
}

const showData = () => {
    document.getElementById("footer").innerHTML = ''
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("footer").innerHTML += `
        <div class="row">
            <div class="column">
                <div class="card" style="width: 100%;">

                    <div>
                        <img src="${datas[i].image}" width="300px" alt="">
                    </div>
                    <br />
                    <div class="in-card">
                        <span style="font-size: 20px; font-weight: bold; ">Title</span>
                        <div>
                            <span>durasi : 3 bulan</span>
                            <p>${datas[i].description}</p>
                        </div>
                    </div>
                    
                    <div class="icon">
                    ${datas[i].icons[0] ? `<i class="fa-brands fa-react"></i>` : ""} 
                    ${datas[i].icons[1] ? `<i class="fa-brands fa-node"></i>` : ""} 
                    ${datas[i].icons[2] ? `<i class="fa-brands fa-java"></i>` : ""} 
                    ${datas[i].icons[3] ? `<i class="fa-brands fa-square-js"></i>` : ""} 
                    </div>
                    <div class="button-bottom">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}