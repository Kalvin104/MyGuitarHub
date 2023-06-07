import React from 'react'

const AddNewGuitar = ({handleSubmitGuitar, setNewBrand, setNewCategory, setNewTitle, setNewYear, setNewPrice, setNewDescription}) => {
  return (
    <form className="addGuitarForm" onSubmit={handleSubmitGuitar}>
        <div style={{display: "flex"}}>
        <div id="formlabelsdiv">
            <label id="formlabels" >Brand:</label>
            <label id="formlabels">Category</label>
            <label id="formlabels">Title</label>
            <label id="formlabels">Year:</label>
            <label id="formlabels">Price</label>
            <label id="formlabels">Description</label>
        </div>
        <div>
        <select className="input" name="brand" id="brand" onChange={(e) => setNewBrand(e.target.value)}>
            <option value="Epiphone">Epiphone</option>
            <option value="Gibson">Gibson</option>
            <option value="Fender">Fender</option>
            <option value="PRS">PRS</option>
            <option value="Taylor">Taylor</option>
            <option value="Martin">Martin</option>
            <option value="Ibanez">Epiphone</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Gretsch">Gretsch</option>
        </select>
        <br></br>
        
        <input
            className="input"
            id="inputCategory"
            type="text"
            placeholder="e.g. Les Paul / Stratocaster"
            onChange={(e) => setNewCategory(e.target.value)}
            required
        ></input>
        <br></br>
        
        <input
            className="input"
            id='inputTitle'
            type='text'
            placeholder='Title'
            required
            onChange={(e) => setNewTitle(e.target.value)}
        >
        </input>
        <br></br>
        
        <input
        className="input"
         id='inputYear'
         type='text'
         placeholder='Year manufactured'
         onChange={(e) => setNewYear(e.target.value)}
         required
        ></input>
        <br></br>
        
        <input
            className="input"
            id='inputPrice'
            type='number'
            placeholder='£'
            onChange={(e) => setNewPrice(e.target.value)}
            required
        ></input>
        <br></br>
        
        <textarea
            className="input desc"
            id='inputDesc'
            type='text'
            placeholder='Write about this guitar...'
            onChange={(e) => setNewDescription(e.target.value)}
            //required
        ></textarea>
        {/* <label>Image</label>
        <input
        id='inputImage'
        type='file'
        ></input> */}
        </div>
        </div>
        <br></br>
        <div style={{width: "100%", marginLeft: "40%"}}>
        <button
        className="inputBtn"
        type='submit'
        aria-label='Add Item'
        >Submit</button>
        </div>
    </form>

    // brand: "Gibson",
    // title: "Standard '60s",
    // category: "Les Paul",
    // year: "1960",
    // price: 2779,
    // img: "gibson60sicedtea.jpeg",
    // desc: "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s has a solid mahogany body with an AA figured maple top, and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with a classic-style Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic® \"Kidney\" tuners, and gold Top Hat knobs with silver reflectors. The 60s Burstbucker™ pickups are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.",
    // on: false
  )
}

export default AddNewGuitar