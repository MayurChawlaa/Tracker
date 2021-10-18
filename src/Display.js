import "./display_style.css";

function Display(){
    const signButton = (e) =>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML === "+"){
            e.target.innerHTML = "−";
            e.target.style.backgroundColor = "lightcoral";
        }
        else {
            e.target.innerHTML = "+";
            e.target.style.backgroundColor = "chartreuse";
        }
    }
    return(
        <div className="display-container">
            <div className="display-date" contentEditable="true">31st Aug, 21</div>
            <div className="display-tag">
                <div className="display-tag-name" contentEditable="true">Salary</div>
                <div className="display-tag-sign">
                    <button className="display-tag-sign-button" onClick={(e)=>signButton(e)}>+</button>
                </div>
            </div>
            <div className="display-amount" contentEditable="true" inputMode="numeric">35939</div>
        </div>
    );
}
export default Display;