import Display from "./Display";
function Tracker(){
    const Sum = () => {
            console.log("Sum");
            const table = document.querySelector(".table");
            //console.log(table.childElementCount,table.childNodes);
            for(let i=1;i<table.childElementCount-3;i++)
            {
                console.log(table.childNodes[i]);
                
                let row = table.childNodes[i];
                for(let j=1;j<row.childElementCount;j++)
                {
                    //columns
                    let column = row.childNodes[j];
                    console.log(column);
                    //children of columns are date,tag and amount
                    let container = column.childNodes[0];
                    console.log(container);
                    //console.log(container[0].childNodes);
                }
            }
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