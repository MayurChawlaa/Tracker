import "./display_style.css";

function Display(){
    return(
        <div className="display-container">
            <div className="display-date" contentEditable="true">31st Aug, 21</div>
            <div className="display-tag">
                <div className="display-tag-name" contentEditable="true">Salary</div>
                <div className="display-tag-sign"><button>+</button></div>
            </div>
            <div className="display-amount" contentEditable="true">35,939</div>
        </div>
    );
}
export default Display;