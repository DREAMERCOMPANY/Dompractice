/* const d = document

export default function contactFormValidations(){
    const $form = document.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach(input=>{
        const $span= d.createElement("span")
        $span.id = input.name
        $span.textContent = input.title
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    })

    d.addEventListener("keyup",e=>{

        if(e.target.matches(".contact-form [required]")){
            let $input= e.target,
            $pattern = $input.pattern || $input.dataset.pattern

            console.log($input,$pattern)

        }
    })

    

} */