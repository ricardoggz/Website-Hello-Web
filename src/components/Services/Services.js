import { values } from "./values"
const services = document.getElementById('services')

export const Services = ()=>{
    return values.map((value)=>(
        services.innerHTML+=`
            <div class='col-md-4 text-center border pt-3 pb-3'>
                <a class="btn btn-link active" data-bs-toggle="collapse" href="#${value.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                    ${value.link}
                </a>
                <div class="collapse" id="${value.id}">
                    <div class="card card-body">
                        <ul class="list-group list-group-flush">
                             ${value.listItems.map((value)=> `<li class="list-group-item">${value}</li>`)}                                         
                        </ul>
                    </div>
                </div>
            </div>
        `
    ))
}