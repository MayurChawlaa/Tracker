import Display from "./Display";
function Tracker(){
    return(
        <div className="table">
            <div className="row header">
                <div className="column">Mayur</div>
                <div className="column">Axis Bank</div>
                <div className="column">Union Bank</div>
                <div className="column">Cash</div>
                <div className="column">Stocks</div>
                <div className="column"><button>Add Source</button></div>
            </div>
            <div className="row">
                <div className="column">Filters</div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"><Display/></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column">Total</div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true">Grand Total</div>
            </div>
            <div className="row">
                <div className="column"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
            </div>
            <div className="row">
                <div className="column">Goals =></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true"></div>
                <div className="column" contentEditable="true">Grand Total</div>
            </div>
        </div>
    )
}
export default Tracker;