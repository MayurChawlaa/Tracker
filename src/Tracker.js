import Display from "./Display";
function Tracker() {
    const Sum = () => {
        //console.log("Sum");
        const table = document.querySelector(".table");
        for (let i = 1; i < table.childElementCount - 3; i++) {

            //get a row
            //console.log(table.childNodes[i]);                
            let row = table.childNodes[i];
            //console.log(row);
            let sum = [];
            for (let j = 1; j < row.childElementCount - 1; j++) {
                let temp_sum = 0;
                //get columns
                let column = row.childNodes[j];
                //console.log(column);

                //getting column child container
                //children of columns are date,tag and amount
                let container = column.childNodes[0];
                //console.log(container);
                //gettign the child nodes of the column
                let containerChildNodes = container.childNodes;
                //getting the amount element of the container 
                // console.log(containerChildNodes[2].innerText);
                temp_sum = temp_sum + parseInt(containerChildNodes[2].innerText);
                sum[i] = temp_sum;
            }
            console.log(sum);
        }
    };
    return (
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
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"></div>
                </div>
                <div className="row">
                    <div className="column first-column"></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
                    <div className="column"><Display /></div>
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