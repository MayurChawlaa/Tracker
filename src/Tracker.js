import Display from "./Display";
function Tracker(){
    const Sum = () => {
            console.log("Sum");
            const table = document.querySelector(".table");
            console.log(table);
    };
    return(
        <div>
        <div className="table">
            <div className="row header">
                <div className="column first-column">Mayur</div>
                <div className="column">Axis Bank</div>
                <div className="column">Union Bank</div>
                <div className="column">Cash</div>
                <div className="column">Stocks</div>
                <div className="column"><button>Add Source</button></div>
            </div>
            <div className="row">
                <div className="column first-column">Filters</div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"><Display/></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column">Total</div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">Grand Total</div>
            </div>
            <div className="row">
                <div className="column first-column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
            </div>
            <div className="row">
                <div className="column first-column" contentEditable="true">Goals =&gt;</div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true">Grand Total</div>
            </div>
        </div>
        <button onClick={Sum}>Sum</button>
        </div>
    )
}
export default Tracker;