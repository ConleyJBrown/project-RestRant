const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className = "row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={data.place.name} 
                            required />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor="pic">Picture</label>
                        <input 
                            className="form-control" 
                            id="pic" 
                            pic = "pic" 
                            value={data.place.pic} 
                        />
                    </div>
                </div>
                <div className = "row">
                    <div className = "form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input 
                            className="form-control" 
                            id="city" 
                            city="city" 
                            value={data.place.city} 
                        />
                    </div>
                    <div className = "form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input 
                            className="form-control" 
                            id="state" 
                            state = "state"
                            value={data.place.state} 
                        />
                    </div>
                </div>
                <div className = "form-group">
                <label htmlFor="cusines">Place Name</label>
                <input 
                    className="form-control" 
                    id="cuisines" 
                    cuisines = "cuisines" 
                    value={data.place.cuisines} 
                    required />
                </div>
                <input className="btn btn-primary" type="submit" value="Edit Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form