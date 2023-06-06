import React from 'react'

const AddNewGuitar = ({handleSubmitGuitar, setNewBrand, setNewCategory, setNewTitle, setNewYear, setNewPrice, setNewDescription}) => {
  return (
    <form className="addGuitarForm" onSubmit={handleSubmitGuitar}>
        <label htmlFor="brand">Brand:</label>
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
        <label>Category</label>
        <input
            className="input"
            id="inputCategory"
            type="text"
            placeholder="e.g. Les Paul / Stratocaster"
            onChange={(e) => setNewCategory(e.target.value)}
            required
        ></input>
        <label>Title</label>
        <input
            className="input"
            autoFocus
            id='inputTitle'
            type='text'
            placeholder='Title'
            required
            onChange={(e) => setNewTitle(e.target.value)}
        >
        </input>
        <label>Year:</label>
        <input
        className="input"
         id='inputYear'
         type='text'
         placeholder='Year manufactured'
         onChange={(e) => setNewYear(e.target.value)}
         required
        ></input>
        <label>Price</label>
        <input
            className="input"
            id='inputPrice'
            type='number'
            placeholder='£'
            onChange={(e) => setNewPrice(e.target.value)}
            required
        ></input>
        <label>Description</label>
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


        <button
        className="inputBtn"
        type='submit'
        aria-label='Add Item'
        >Submit</button>
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