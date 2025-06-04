

function Pagination({ total, records, fun, next, prev, page }) {

    let x = Math.ceil(total / records)
    console.log(x)

    let n = []
    for (let i = 1; i <= x; i++) {
        n.push(i)
    }
    
    console.log(n)
    return (
        <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"8%",paddingTop:"10px",alignItems:"center"}}>
            Current Page : {page}/{n.length}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", paddingTop: "10px", paddingRight: "7%" }}>
                <button onClick={prev} className="btn btn-outline-primary"><i class="fa-solid fa-less-than"></i></button>
                {n.map((p) =>
                    <div>
                        <button className="btn btn-outline-primary" onClick={() => { fun(p) }}>{p}</button>
                    </div>
                )}
                <button onClick={next} className="btn btn-outline-primary"><i class="fa-solid fa-greater-than"></i></button>

            </div>
        </div>
    )


}
export default Pagination;